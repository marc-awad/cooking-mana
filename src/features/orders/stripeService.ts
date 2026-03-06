type CheckoutSessionInput = {
  amount: number
  customerEmail: string
}

type CheckoutSessionResult = {
  clientSecret: string
  paymentIntentId: string
}

function buildRandomSuffix() {
  return Math.random().toString(36).slice(2, 10)
}

function delay(durationInMs: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, durationInMs)
  })
}

export async function createStripeCheckoutSession({
  amount,
  customerEmail,
}: CheckoutSessionInput): Promise<CheckoutSessionResult> {
  if (amount <= 0) {
    throw new Error("Invalid checkout amount")
  }

  if (!customerEmail.trim()) {
    throw new Error("Missing customer email")
  }

  // Simulation d'un appel backend Stripe.
  await delay(600)

  const paymentIntentId = `pi_${buildRandomSuffix()}`

  return {
    paymentIntentId,
    clientSecret: `cs_test_${buildRandomSuffix()}`,
  }
}

export async function processStripeWebhook(paymentIntentId: string) {
  if (!paymentIntentId.trim()) {
    throw new Error("Invalid payment intent id")
  }

  // Simulation du webhook stripe payment_intent.succeeded.
  await delay(350)

  return {
    eventType: "payment_intent.succeeded",
    paymentIntentId,
  } as const
}
