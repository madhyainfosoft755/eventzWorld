import React from 'react';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Facebook() {
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
        render={({ loading, onClick }) => (
          <button onClick={onClick} disabled={loading} style={buttonStyle}>
            <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
             
          </button>
        )}
      />
    </>
  );
}

export default Facebook;

const buttonStyle = {
 
  border: "none",
  // padding: "5px",
  color: "white",
  // fontSize: "14px",
  // display: "inline-block",
  marginTop: "18px",
  marginBottom: "15px",
  // textalign: "center",
  cursor: "pointer",
  backgroundColor: "#3b5998",
  // justifycontent: "center",
  //   alignitems: "center"
};

const iconStyle = {
  // marginRight: "8px",
  width:"30px",

};