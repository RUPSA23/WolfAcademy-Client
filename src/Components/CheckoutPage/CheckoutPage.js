import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutPage = ({course, user}) => {
  const {_id, name, price} = course;
  const {email} = user;

  console.log(price);
  // console.log(email);
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    fetch("http://localhost:4000/create-payment-intent", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ course })
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [course]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    
    if (card == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log( error);
      setCardError(error.message);
    } else {
      console.log(paymentMethod);
      setCardError('');
    }

    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {email: email},
        }
      }
    );
    if(confirmError){
      setCardError(confirmError.message);
      return;
    }
    console.log('******************************************');
    console.log('paymentIntent', paymentIntent);
  }
    return (
<div className="my-12 w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-white dark:border-gray-700 px-10 py-10 mx-auto">
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
      />
      <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mt-12 mb-4' 
      type="submit" 
      disabled={!stripe}>
        Pay
      </button>
    </form>
    <p className="text-red-500">{cardError}</p>
      </div>
      
     
    );
};

export default CheckoutPage;