import React from 'react'
import { Link } from "react-router-dom"
import Nav from "../Nav/nav"
import './signup_page.css'

const signup_page = () => {
    return (
        <div>
            <Nav />
            <div className='loginpage'>

                <div className="Form-container">

                    <div className='wrapper four'>
                        <div className='type'>
                            <h1 className="Login typing">Sign up</h1>
                        </div>
                    </div>

                    <p className="login-text">Hey, Enter your details to create your account</p>
                    <br></br>
                    <form className="form">
                        <input className="inputtext3" type="text" name="name" placeholder='Enter your name'>
                        </input>

                        <input className="inputtext4" type="text" name="username" placeholder='Create your username'>
                        </input>

                        <br></br>
                        <input className="inputtext1" type="text" name="email" placeholder='@Enter your email'>
                        </input>
                        <br></br>
                        <input className="inputtext2" type="text" name="passcode" placeholder='Passcode'>
                        </input>
                    </form>
                    <p className='or'>OR</p>
                    <button className="button" type="button">Continue with Google</button>
                    <p className="paragraphli">Already have an account?  <Link to="/Login_page"><b>Login now</b></Link></p>
                </div>
                <img className='loginimage1' alt='error' src="Images/img2.png"></img>

            </div>


        </div>
    )
}

export default signup_page
