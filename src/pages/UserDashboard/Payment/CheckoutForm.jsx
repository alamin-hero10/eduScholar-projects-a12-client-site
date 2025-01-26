import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const CheckoutForm = () => {

    // ---useStripe---
    const stripe = useStripe();
    const elements = useElements();
    const axiosPublic = useAxiosPublic();

    // ---useStripe---
    const [error, setError] = useState('');

    // ---useStripe---
    useEffect(() => {
        axiosPublic.post("/create-payment-intent")
    }, [])

    // ---handleSubmit---
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        // ---getElement---
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        // Stripe createPaymentMethod:
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            // console.log('payment error', error)
            setError(error.message)
        }
        else {
            console.log('Payment Method', paymentMethod)
            setError('')
        }
    }

    // ---Return---
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            >
            </CardElement>
            {/* Pay-Button */}
            <button className="btn btn-sm btn-accent mt-10 rounded-md" type="submit" disabled={!stripe}>
                Pay
            </button>
            {/* Error-Message */}
            <p className="text-red-600">{ error}</p>
        </form>
    );
};

export default CheckoutForm;