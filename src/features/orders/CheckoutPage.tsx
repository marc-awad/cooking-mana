import { type FormEvent, useMemo, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { getValidAuthTokenPayload } from "../auth/jwtToken"
import { clearCart, computeCartTotal, loadCart } from "./cartStorage"
import { createOrder } from "./orderService"
import {
  createStripeCheckoutSession,
  processStripeWebhook,
} from "./stripeService"

type CheckoutState = "idle" | "processing" | "success" | "error"

function CheckoutPage() {
  const { t } = useTranslation()
  const authPayload = getValidAuthTokenPayload()
  const customerEmail = authPayload?.sub ?? ""
  const [customerName, setCustomerName] = useState("")
  const [checkoutState, setCheckoutState] = useState<CheckoutState>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [createdOrderId, setCreatedOrderId] = useState("")
  const [items, setItems] = useState(() => loadCart(customerEmail))

  const totalPrice = useMemo(() => computeCartTotal(items), [items])

  if (!authPayload) {
    return <Navigate to="/login" replace />
  }

  async function submitCheckout(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!customerName.trim()) {
      setCheckoutState("error")
      setErrorMessage(t("orders.checkout.errors.missingName"))
      return
    }

    if (items.length === 0) {
      setCheckoutState("error")
      setErrorMessage(t("orders.checkout.errors.emptyCart"))
      return
    }

    try {
      setCheckoutState("processing")
      setErrorMessage("")

      const checkoutSession = await createStripeCheckoutSession({
        amount: totalPrice,
        customerEmail,
      })

      await processStripeWebhook(checkoutSession.paymentIntentId)

      const createdOrder = createOrder({
        customerEmail,
        customerName,
        paymentIntentId: checkoutSession.paymentIntentId,
        items,
      })

      clearCart(customerEmail)
      setItems([])
      setCreatedOrderId(createdOrder.id)
      setCheckoutState("success")
    } catch {
      setCheckoutState("error")
      setErrorMessage(t("orders.checkout.errors.paymentFailed"))
    }
  }

  return (
    <main className="px-4 py-10">
      <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          {t("orders.checkout.title")}
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          {t("orders.checkout.subtitle")}
        </p>

        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          <p>
            {t("orders.checkout.totalToPay")}
            <span className="font-semibold">{totalPrice.toFixed(2)} EUR</span>
          </p>
          <p className="mt-1">
            {t("orders.checkout.itemsCount", { count: items.length })}
          </p>
        </div>

        {checkoutState === "success" ? (
          <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
            <p className="font-medium">{t("orders.checkout.successTitle")}</p>
            <p className="mt-1">
              {t("orders.checkout.successOrderId", { orderId: createdOrderId })}
            </p>
            <Link
              to="/orders"
              className="mt-3 inline-flex rounded-lg bg-emerald-700 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-600"
            >
              {t("orders.checkout.viewHistory")}
            </Link>
          </div>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={submitCheckout} noValidate>
            <div>
              <label
                htmlFor="checkout-name"
                className="mb-1 block text-sm font-medium text-slate-800"
              >
                {t("orders.checkout.customerName")}
              </label>
              <input
                id="checkout-name"
                type="text"
                value={customerName}
                onChange={(event) => setCustomerName(event.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-100"
                placeholder={t("orders.checkout.customerNamePlaceholder")}
              />
            </div>

            <button
              type="submit"
              disabled={checkoutState === "processing"}
              className={`w-full rounded-lg px-4 py-2 text-sm font-medium text-white ${
                checkoutState === "processing"
                  ? "cursor-not-allowed bg-slate-400"
                  : "bg-rose-900 hover:bg-rose-800"
              }`}
            >
              {checkoutState === "processing"
                ? t("orders.checkout.processing")
                : t("orders.checkout.payButton")}
            </button>

            {checkoutState === "error" && errorMessage ? (
              <p className="text-sm font-medium text-red-600">{errorMessage}</p>
            ) : null}

            <Link
              to="/cart"
              className="inline-flex text-sm font-medium text-rose-900 hover:text-rose-700"
            >
              {t("orders.checkout.backToCart")}
            </Link>
          </form>
        )}
      </div>
    </main>
  )
}

export default CheckoutPage
