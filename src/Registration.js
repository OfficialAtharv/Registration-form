import React from 'react';
import './Ragistration.css';
import { Link } from 'react-router-dom';

const Registration = () => {
  const style = {
    background: 'rgb(238, 174, 202)',
    background: 'radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(163, 205, 255, 1) 100%)',
    height: '100vh',
    margin: '0',
  };
  return (
    <div className='body' style={style}>
      <div className="container">
        <form className="form">
          <u>
            <h2 className="mainhading">Registration Form</h2>
          </u>
          <label>Enter Your Name :</label>
          <input type="text" id="name" required />
          <label>Enter your contact details :</label>
          <input type="text" id="contact" required />
          <label>Enter Your email address :</label>
          <input type="email" id="email" required />
          <label>Password :</label>
          <input type="password" id="password" required />
          <label>Confirm Password :</label>
          <input type="password" id="confirmPassword" required />
          <button className="submit_btn" id="clicked" type="submit">
            Submit
          </button>
          <p className="p">
            <Link to="/login">Already Have an Account? Click here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
