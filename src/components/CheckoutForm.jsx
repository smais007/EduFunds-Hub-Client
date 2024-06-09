import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState();
  const [transactionId, setTransactionId] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  console.log(user);

  const {
    data: scholarship,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["scholarship", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/scholarships/${id}`);
      return res.data;
    },
  });

  const ApplicationFee = scholarship.application_fee;

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: ApplicationFee })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, ApplicationFee]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading scholarship details</div>;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    // Paymnt Confirmation
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        const payment = {
          email: user.email,
          price: ApplicationFee,
          transactionId: paymentIntent.id,
          date: new Date(),
          status: "Pending",
          scholarshipId: scholarship._id,
          scholarship_name: scholarship.scholarship_name,
          university_name: scholarship.university_name,
          city: scholarship.city,
          country: scholarship.country,
          subject_category: scholarship.subject_category,
          scholarship_category: scholarship.scholarship_category,
          programme: scholarship.programme,
          tution_fee: scholarship.tution_fee,
          application_fee: scholarship.application_fee,
          service_charge: scholarship.service_charge,
          deadline: scholarship.deadline,
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log("Payment saves", res);
        navigate(`/details/${scholarship._id}/payment/application-form`);
      }
    }
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <button
          className="bg-gray-900 py-2 px-6 text-white"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
