import { useMemo, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { INITIAL_PRODUCTS } from "../admin/products/data/productData"
import { getValidAuthTokenPayload } from "../auth/jwtToken"
import {
  addProductToCart,
  computeCartTotal,
  loadCart,
  removeCartItem,
  updateCartItemQuantity,
} from "./cartStorage"

function CartPage() {
  const { t } = useTranslation()
  const authPayload = getValidAuthTokenPayload()
  const customerEmail = authPayload?.sub ?? ""
  const [items, setItems] = useState(() => loadCart(customerEmail))

  const availableProducts = useMemo(
    () => INITIAL_PRODUCTS.filter((product) => product.isAvailable),
    [],
  )

  const totalPrice = useMemo(() => computeCartTotal(items), [items])

  if (!authPayload) {
    return <Navigate to="/login" replace />
  }

  function addToCart(productId: string) {
    const selectedProduct = availableProducts.find(
      (product) => product.id === productId,
    )

    if (!selectedProduct) {
      return
    }

    setItems(
      addProductToCart(customerEmail, {
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
      }),
    )
  }

  function increaseQuantity(productId: string, currentQuantity: number) {
    setItems(
      updateCartItemQuantity(customerEmail, productId, currentQuantity + 1),
    )
  }

  function decreaseQuantity(productId: string, currentQuantity: number) {
    if (currentQuantity <= 1) {
      setItems(removeCartItem(customerEmail, productId))
      return
    }

    setItems(
      updateCartItemQuantity(customerEmail, productId, currentQuantity - 1),
    )
  }

  function removeFromCart(productId: string) {
    setItems(removeCartItem(customerEmail, productId))
  }

  return (
    <main className="px-4 py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[2fr_1fr]">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            {t("orders.cart.title")}
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            {t("orders.cart.subtitle")}
          </p>

          <div className="mt-6 space-y-4">
            {availableProducts.map((product) => (
              <article
                key={product.id}
                className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h2 className="text-base font-semibold text-slate-900">
                    {product.name}
                  </h2>
                  <p className="text-sm text-slate-600">
                    {product.description}
                  </p>
                  <p className="mt-1 text-sm font-medium text-rose-900">
                    {product.price.toFixed(2)} EUR
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => addToCart(product.id)}
                  className="rounded-lg bg-rose-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-rose-800"
                >
                  {t("orders.cart.addToCart")}
                </button>
              </article>
            ))}
          </div>
        </section>

        <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            {t("orders.cart.myCart")}
          </h2>

          {items.length === 0 ? (
            <p className="mt-4 text-sm text-slate-600">
              {t("orders.cart.empty")}
            </p>
          ) : (
            <ul className="mt-4 space-y-3">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        {item.name}
                      </p>
                      <p className="text-xs text-slate-600">
                        {item.price.toFixed(2)} EUR x {item.quantity}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs font-medium text-red-600 hover:text-red-700"
                    >
                      {t("orders.cart.remove")}
                    </button>
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(item.id, item.quantity)}
                      className="h-8 w-8 rounded-md border border-slate-300 bg-white text-sm font-medium text-slate-700"
                      aria-label={t("orders.cart.decreaseAria", {
                        itemName: item.name,
                      })}
                    >
                      -
                    </button>
                    <span className="min-w-6 text-center text-sm font-medium text-slate-900">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => increaseQuantity(item.id, item.quantity)}
                      className="h-8 w-8 rounded-md border border-slate-300 bg-white text-sm font-medium text-slate-700"
                      aria-label={t("orders.cart.increaseAria", {
                        itemName: item.name,
                      })}
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 border-t border-slate-200 pt-4">
            <div className="flex items-center justify-between text-sm text-slate-700">
              <span>{t("orders.cart.total")}</span>
              <span className="text-base font-semibold text-slate-900">
                {totalPrice.toFixed(2)} EUR
              </span>
            </div>
            <Link
              to="/checkout"
              className={`mt-4 block rounded-lg px-4 py-2 text-center text-sm font-medium text-white ${
                items.length > 0
                  ? "bg-rose-900 hover:bg-rose-800"
                  : "cursor-not-allowed bg-slate-400"
              }`}
              aria-disabled={items.length === 0}
              onClick={(event) => {
                if (items.length === 0) {
                  event.preventDefault()
                }
              }}
            >
              {t("orders.cart.checkout")}
            </Link>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default CartPage
