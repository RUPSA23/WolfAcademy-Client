import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [carderror, setCardError] = useState();

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
      setCardError(error);
    } else {
      console.log(paymentMethod);
      setCardError('');
    }
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
      <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mt-12 mb-4' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
      </div>
     
    );
};

export default CheckoutPage;