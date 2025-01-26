import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
    // ---Payment---
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

    // ---Payment---
    // ---Payment---
    // ---Return---
    return (
        <div className="w-10/12 mx-auto">
            <div>
                <SectionTitle heading="Payment"></SectionTitle>
            </div>
            {/* ---Payment--- */}
            <div className="w-[500px] border p-5 mt-14 mx-auto">
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>

    );
};

export default Payment;