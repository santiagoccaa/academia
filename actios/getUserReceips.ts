import Stripe from "stripe";
import { getStripeCustomerId } from "./getStripeCustomerId";

// getStripeCustomerId

const stripe = new Stripe(process.env.STRIPE_SECRECT_KEY!, {
    apiVersion: "2026-03-25.dahlia"
})
export const getUserReceips = async (userId: string) => {
    try {
        const stripeCustomerId = await getStripeCustomerId(userId)
        if (!stripeCustomerId) {
            throw new Error("Not found Stripe Customer ID")
        }

        const paymentsIntents = await stripe.paymentIntents.list({
            customer: stripeCustomerId,
            limit: 10
        })

        const receipts = await Promise.all(
            paymentsIntents.data.map(async (paymentsIntent) => {
                if (typeof paymentsIntent.latest_charge === "string") {
                    const charge = await stripe.charges.retrieve(paymentsIntent.latest_charge)

                    return {
                        patmentIntendId: paymentsIntent.id,
                        receipUrl: charge.receipt_url || null
                    }
                }

                return{
                    patmentIntendId: paymentsIntent.id,
                    receipUrl: null
                }
            })
        )

        return receipts
    } catch (error) {
        console.log("GET_RECEIPT_STRIPE", error);
        return []
    }
}