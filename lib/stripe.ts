import Stripe from 'stripe'

if (!process.env.STRIPE_SECRECT_KEY) {
    throw new Error("STRIPE_SECRECT_KEY NOT FOUND")
}

export const stripe = new Stripe(process.env.STRIPE_SECRECT_KEY!, {
    apiVersion: "2026-03-25.dahlia",
    typescript: true
})