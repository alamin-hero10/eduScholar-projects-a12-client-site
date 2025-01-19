import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";

const Payment = () => {
    // ---Payment---
    const stripePromise = loadStripe('');

    // ---Payment---
    // ---Payment---
    // ---Return---
    return (
        <div>
            <div>
                <SectionTitle heading="Payment"></SectionTitle>
            </div>
            {/* ---Payment--- */}
            <div>
                <Elements stripe={stripePromise}>
                    
                </Elements>
            </div>
        </div>

    );
};

export default Payment;