import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {

    // ---useStripe---
    const stripe = useStripe();
    const elements = useElements();

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
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
            </CardElement>
        </form>
    );
};

export default CheckoutForm;