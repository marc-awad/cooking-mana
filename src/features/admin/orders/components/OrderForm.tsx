import { type FormEvent, useState } from "react"
import { useTranslation } from "react-i18next"
import type { Order, OrderStatus } from "../types/order"

type OrderFormProps = {
  initialData?: Order
  onSubmit: (order: Omit<Order, "id">) => void
  onCancel: () => void
}

const EMPTY_FORM: Omit<Order, "id"> = {
  clientName: "",
  clientEmail: "",
  items: [],
  totalPrice: 0,
  status: "en_attente",
}

const MIN_TOTAL_PRICE = 0
const INPUT_CLASS =
  "rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"

function parseTotalPriceInput(inputValue: string) {
  const parsedValue = Number(inputValue)
  return Number.isFinite(parsedValue) && parsedValue >= MIN_TOTAL_PRICE
    ? parsedValue
    : MIN_TOTAL_PRICE
}

function FormField({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      {children}
    </div>
  )
}

export default function OrderForm({
  initialData,
  onSubmit,
  onCancel,
}: OrderFormProps) {
  const { t } = useTranslation()
  const [formData, setFormData] = useState<Omit<Order, "id">>(
    initialData ?? EMPTY_FORM,
  )

  const [itemsInput, setItemsInput] = useState(
    initialData?.items.join(", ") ?? "",
  )

  function updateField(
    field: keyof Omit<Order, "id">,
    value: string | number | string[],
  ) {
    setFormData((current) => ({ ...current, [field]: value }))
  }

  function handleItemsChange(inputValue: string) {
    setItemsInput(inputValue)
    const items = inputValue
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
    updateField("items", items)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormField label={t("admin.orders.form.clientName")}>
        <input
          className={INPUT_CLASS}
          type="text"
          value={formData.clientName}
          onChange={(event) => updateField("clientName", event.target.value)}
          required
        />
      </FormField>

      <FormField label={t("admin.orders.form.clientEmail")}>
        <input
          className={INPUT_CLASS}
          type="email"
          value={formData.clientEmail}
          onChange={(event) => updateField("clientEmail", event.target.value)}
          required
        />
      </FormField>

      <FormField label={t("admin.orders.form.items")}>
        <input
          className={INPUT_CLASS}
          type="text"
          value={itemsInput}
          onChange={(event) => handleItemsChange(event.target.value)}
          placeholder={t("admin.orders.form.itemsPlaceholder")}
          required
        />
      </FormField>

      <FormField label={t("admin.orders.form.totalPrice")}>
        <input
          className={INPUT_CLASS}
          type="number"
          step="0.01"
          min="0"
          value={formData.totalPrice}
          onChange={(event) =>
            updateField("totalPrice", parseTotalPriceInput(event.target.value))
          }
          required
        />
      </FormField>

      <FormField label={t("admin.common.status")}>
        <select
          className={INPUT_CLASS}
          value={formData.status}
          onChange={(event) =>
            updateField("status", event.target.value as OrderStatus)
          }
        >
          <option value="en_attente">{t("admin.status.pending")}</option>
          <option value="en_cours">{t("admin.status.inProgress")}</option>
          <option value="livree">{t("admin.status.delivered")}</option>
          <option value="annulee">{t("admin.status.cancelled")}</option>
        </select>
      </FormField>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
        >
          {t("admin.common.cancel")}
        </button>
        <button
          type="submit"
          className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
        >
          {t("admin.common.save")}
        </button>
      </div>
    </form>
  )
}
