import React from 'react'
import './login.css'
import {Link } from 'react-router-dom';
const Login = () => {
  const style = {
    background: 'rgb(238, 174, 202)',
    background: 'radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(163, 205, 255, 1) 100%)',
    height: '100vh',
    margin: '0',
  };
  return (
    <div className='body' style={style}>
     <div class="container">
      <form class="form">
        <u><h2 class="mainhading">Login Form</h2></u>
        <label>Enter Your Name :</label>
        <input type="text" required/>
        <label>Enter Your email address :</label>
        <input type="email" required/>
        <label>Password : </label>
        <input required/>
        <button class="submit_btn">Submit</button>
        <p className="p">
            <Link to="/registration">Don't Have an Account? Click here</Link>
          </p>
      </form>
    </div>
    </div>
  )
}

export default Login