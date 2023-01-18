import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutPage from './CheckoutPage';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useAuthState } from "react-firebase-hooks/auth";
import app from '../../firebase.init';
import { getAuth } from 'firebase/auth';

const stripePromise = loadStripe('pk_test_51MRIwySBPcNIjIjbxU9XKHqkYiEIOUrk8LIiMYMUSMO7S3sZ2eFTp1NGv3GIy4dhVlveVWbYndRDQMQE9IRPUcAf00YBKY7kE3');
const auth = getAuth(app);

const Payment = () => {
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
    const [course, setCourse] = useState({});

    useEffect(() => {
        const url = `https://wolfacademy-server-rupsa23.onrender.com/course/${id}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setCourse(data)
            // console.log(data);
          });
         
      }, []);
    return (
        <div>
        <div className="my-12 w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-white dark:border-gray-700 px-10 py-10 mx-auto">
        <h1 className='text-xl font-bold'>Order Summary</h1>
        <h1 className="text-blue-500 font-bold">Hello {user.displayName}</h1>
            <h3 className="font-semibold">Pay for {course.name}</h3>
           
            <p>
            Please Pay <span className="font-bold">{course.price}</span>
          </p>
        </div>
          
            <div>
            <Elements stripe={stripePromise}>
            <CheckoutPage></CheckoutPage>
            </Elements>
            </div>
        </div>

    );
};

export default Payment;