import React, { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { useNavigate } from 'react-router-dom';

const PhoneAuth = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(props.auth);
         ui.start('.firebaseui-auth-container',  {
            // callbacks: {
            //     signInSuccessWithAuthResult: function(currentUser,authResult, redirectUrl) {
            //         const userId = currentUser.uid; 
            //         window.location.assign(`/users/${userId}`);
            //         return false;
            //     }
            // },
            signInOptions:  [{
                provider:firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                defaultCountry: 'IN' }],

            signInSuccessUrl: '/',
            privacyPolicyUrl: '/',
            // signInFlow: 'popup'
                });
    })

    return (
        <div className='firebaseui-auth-container mt-5'>
            
        </div>
    );
};

export default PhoneAuth;