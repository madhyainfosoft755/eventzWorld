// import React, { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import Signup from '../Sign up/Signup'
// import Main from "../Main"
// import './Login.css'
// import facebook from "../Page/Facbook/facebook";
// // import {logo192} from "../im/logo192"

// const LoginForm = () => {


// //   setMarker,

// //   setPlayers,
// // }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     phone: "",
//     role: "",
//     gender: "",
//     sport: "",
//     email: "",
//     lat: "",
//     lng: "",
//   });




//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");

//   const [showSignup, setShowSignup] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = {
//       userName: userName,
//       password: password,
//     };
//     console.log("Form Data:", formData);

//     // Perform login logic with form data
//     // Handle regular login with entered username and password
//     if (userName === "guest" && password === "guest123") {
//       navigate('/PostFeed');
//     } else {
//       // Handle incorrect login credentials
//       console.log("Invalid username or password");
//     }
//   };

//   // const handleUserNameChange = (e) => {
//   //   setUserName(e.target.value);
//   // };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleGuestLogin = () => {
//     setUserName("guest");
//     setPassword("guest123");
//   };

//   const handleSignup = () => {
//     setShowSignup(true);
//   };

 

//   if (showSignup) {
//     return <Signup />;
//   }





//   useEffect(() => {
//     Logindata();
//     let a;
//     let current = [];
//     current.push();
//   }, []);

//   const [map, setMap] = useState(null);

//   const Logindata = async (event) => {
//     event.preventDefault();
//     console.log("Form submitted", formData);

//     const res = await fetch(`http://localhost:4112/players/Logindata`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ formData, inputs }),
//     });
//     console.log(res);
//   };

//   return (
//     <div className="container">
//       <div className="login-container">
//         <h1>Login Page</h1>
//         <form onSubmit={handleSubmit}>
//           <div>
//             {/* <img src={logo192.png} alt="email" className="email" /> */}
//             <input
//               type="text"
//               placeholder="Username"
//               className="name"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             />
//           </div>
//           <div className="second-input">
//             <input
//               type="password"
//               placeholder="Password"
//               className="name"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//           </div>
//           <div className="login-button" style={{display:"grid",justifyContent:'center', width:"2%"}}>
//             <button type="submit">Login</button>
//             <button type="button" onClick={handleGuestLogin}>Guest Login</button>
//             <Main/>
//             {/* <Facebook/> */}
//             <p className="link">
//               <Link to="#" onClick={handleSignup}>Sign Up</Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
