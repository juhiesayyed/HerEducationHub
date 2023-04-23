import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../Nav/nav"
import './login_page.css'

const login_page = () => {
  return (
    <div>

      <Nav />
      <div className='loginpage'>



        <div className="Form-container">

          <div className='wrapper four'>
            <div className='type'>
              <h1 className="Login typing">Log in</h1>
            </div>
          </div>

          <p className="login-text">Hey, Enter your details to get log in to your account</p>
          <form className="form">
            <input className="inputtext1" type="text" name="email" placeholder='Enter your Email'>
            </input>
            <br></br>
            <input className="inputtext2" type="text" name="passcode" placeholder='Passcode'>
            </input>
          </form>
          <p className='or'>OR</p>
          <button className="button" type="button">Continue with Google</button>
          <p className="paragraphli">Dont have an account?  <Link to="/Signup_Page"><b>Request Now</b></Link></p>
        </div>
        <img className='loginimage1' src="Images/img2.png"></img>

      </div>


    </div>
  )
}

export default login_page
