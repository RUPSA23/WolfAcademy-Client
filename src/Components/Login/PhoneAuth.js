import React, { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const PhoneAuth = (props) => {

    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(props.auth);
        ui.start('.firebaseui-auth-container', {
            signInOptions: [{
                provider:firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                recaptchaParameters: {
                    type: 'image', // 'audio'
                    size: 'normal', // 'invisible' or 'compact'
                    badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
                  },
                  defaultCountry: 'IN'
        }],
              signInSuccessUrl: '/'
            //   privacyPolicyUrl: '/'
        });
    })

    return (
        <div className='firebaseui-auth-container mt-5'>
            
        </div>
    );
};

export default PhoneAuth;