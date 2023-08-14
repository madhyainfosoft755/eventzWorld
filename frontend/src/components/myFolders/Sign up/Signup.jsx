import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import Main from "../Main";
import Search from '.././Google Search/Search'

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: "",
    address: "",
    phone: "",
    role: "",
    gender: "",
    sport: "",
    email: "",
    lat: "",
    lng: "",
    };
    console.log("Form Data:", formData);

    // Perform registration logic with form data
    // You can add code to handle storing the registration details

    // After successful registration, redirect to login page
    navigate("/login");
  };

  
  // useEffect(() => {
  //   getregisterPlayers();
  //   let a;
  //   let current = [];
  //   current.push();
  // }, []);

  // const [map, setMap] = useState(null);

  const register = async (event) => {
    event.preventDefault();
    // console.log("Form submitted", formData);

    const res = await fetch(`http://localhost:4113/create_post/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email , password , name }),
    });
    console.log(res);
  };

  return (
    <div className="container">
      <div className="registration-container">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Name"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email/Mobile"
              className="input-field"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Gender"
              className="input-field"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input-field"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div>
            {/* <input
              type="text"
              placeholder="Location"
              className="input-field"
              value={location}
              // onChange={(e) => setLocation(e.target.value)}
              
            /> */}
            <Search/>
          </div>
          <div className="button-container">
            <button onClick={register} type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
