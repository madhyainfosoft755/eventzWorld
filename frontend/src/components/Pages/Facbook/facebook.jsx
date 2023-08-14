import React from 'react'
import ReactDOM from 'react-dom';
import FacebookLogin from '@greatsumini/react-facebook-login';

// const responseFacebook = (response) => {
//     console.log(response);
//   }

function facebook() {
  return (
    <>
    <FacebookLogin
  appId="148618350247-ub8i9r8hniknbearhb69shomlfic5ig5.apps.googleusercontent.com"
  onSuccess={(response) => {
    console.log('Login Success!', response);
  }}
  onFail={(error) => {
    console.log('Login Failed!', error);
  }}
  onProfileSuccess={(response) => {
    console.log('Get Profile Success!', response);
  }}
/>
    
    </>
  )
}

export default facebook