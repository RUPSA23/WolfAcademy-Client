import React, { useState } from 'react';
import app from "../../firebase.init";
import {useCreateUserWithEmailAndPassword, useSignInWithGoogle} from "react-firebase-hooks/auth";
import { Link, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import Loading from '../Shared/Loading';

const auth = getAuth(app);

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signInWithGoogle, guser, gLoading, gError] = useSignInWithGoogle(auth);

    const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    if (loading || gLoading) {
        return <Loading></Loading>;
      }

    if(user){
        navigate('/login');
    }
    
    if(guser){
        // navigate('/phoneAuth');
        navigate('/')
    }
    
    let signUpError;
    if (error || gError) {
      signUpError = (
        <p className="text-red-500">
          <small>{error?.message || gError?.message}</small>
        </p>
      );
    }

  

    return (
        <div className='px-6'>
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
        <div
        class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <img
        src='https://t4.ftcdn.net/jpg/04/28/75/97/360_F_428759715_jsOPITlaytE3QXc2yI1D4U6uwZdVGkRp.jpg'
          class="w-full"
          alt="register image"
        />
      </div>
       
<section class="dark:bg-white sm:ml-20 xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 md:mb-0 mt-5 mb-12">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white">
     
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form class="space-y-4 md:space-y-6" action="#">
                   <div>
                      <input type="text" name="name" id="name" placeholder="Name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="true"/>
                  </div>
                  <div>
                      <input type="text" name="phoneNumber" id="phpneNumber" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Valid Phone Number" required="true"/>
                  </div>
                  <div>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required="ture"
                      value={email}
                     onChange={(e) => setEmail(e.target.value)}

                      />
                  </div>
                  
                  <div>
                      {/* <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label> */}
                      <input type="password" name="password" id="password" placeholder="Password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="true"
                    value={password}
                     onChange={(e) => setPassword(e.target.value)}
                      />
                  </div>
                  {/* <div>
                      <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="true"
                      
                      />
                  </div>
                   */}
                  <button type="submit" class="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={() => createUserWithEmailAndPassword(email, password)}>Create an account</button>
                  <div
            class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p class="text-center font-semibold mx-4 mb-0">Or</p>
          </div>
          {signUpError}
          <a href="#" class="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                <div class="px-4 py-3">
                    <svg class="h-6 w-6" viewBox="0 0 40 40">
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107"/>
                        <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00"/>
                        <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50"/>
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2"/>
                    </svg>
                 
                </div>
                <button class="px-4 py-3 w-5/6 text-center text-gray-600 font-bold" onClick={() => signInWithGoogle()} >Continue with Google</button>
                </a>
                  <p class="text-sm font-semibold text-black-500 dark:text-black-500">
                      Already have an account? <Link to="/login" class="font-medium text-red-700 hover:underline dark:text-primary-500">Login here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section> 
 </div>
 </div>
    );
};

export default Register;