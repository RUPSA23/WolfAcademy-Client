import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutPage = ({ course, user }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [cardError, setCardError] = useState("");
  
  const { _id, name, price } = course;
  const priceData = JSON.stringify({ price: price });
  const { email } = user;
  // console.log(_id, name, price);
  // console.log(email);
  // console.log("INSIDE CHECKOUT PAGE...");

  useEffect(() => {
    fetch("https://wolfacademy-server-rupsa23.onrender.com/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: priceData
    })
      .then((res) => res.json())
     .then((data) => {
      if (data?.clientSecret) {
        setClientSecret(data.clientSecret);
      }
     })
  }, [priceData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      console.log(error);
      setCardError(error.message);
    } else {
      console.log(paymentMethod);
      setCardError("");
    }
    setSuccess("");

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: email
          }
        }
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }

    if(paymentIntent.status === "succeeded"){
      // store payment info in the DB
      const payment = {
        transactionId: paymentIntent.id,
        email,
        courseId: _id,
        courseName: name,
        price,
      }
      fetch('https://wolfacademy-server-rupsa23.onrender.com/payments', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payment)
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        setSuccess('Congrats! Your Payment completed');
        setTransactionId(paymentIntent.id);
      })
     
    }
    console.log("paymentIntent", paymentIntent);
  };


  return (
    <div className="my-12 w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-white dark:border-gray-700 px-10 py-10 mx-auto">
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
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mt-12 mb-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError}</p>
      {
          success && <div >
                 <p className="text-green-500">{success}</p> 
                 <p>Your transaction Id: <span className=" font-bold">{transactionId}</span></p>
          </div>
          
    }
    
    </div>
  );
};

export default CheckoutPage;
