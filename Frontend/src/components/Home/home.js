import React from 'react'
import "./home.css"
import { Outlet, Link } from "react-router-dom";

import Nav from "../Nav/nav";
import Contact from "../Contact/contact";

import SlideShow from "./SlideShow/slideshow";
import Highlight from "./Highlight/highlight";
import Model1 from "./Model1/model1";
import Model2 from "./Model2/model2";

const home = () => {

    return (
        <div>
            <Nav />
            <SlideShow />
            <Highlight />

            <div className='container-button'>
                <p className='question'><b>Do you want to explore life changing oppurtunities for you?</b> </p>
                <button className='button1'><Link className='bt1' to='sign-up'>sign-up</Link></button>
                <button className='button2'><Link className='bt2' to='log-in'><b>log-in</b></Link></button>
            </div>


            <h2 className='heading1'>What we provide!</h2>
            <Model1 data={"Education"} />
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <Model2 data={"Scholarship"} />
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <Model1 data={"Internship"} />
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <Model2 data={"Jobs"} />
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <Model1 data={"Schemes"} />
            <h2 className='heading2'>About Us!</h2>
            <h3 className='heading3'>HerEducationHub</h3>
            <p className='paragraph'>Welcome to our Website,dedicated to
                empowering women with opportunities
                for carrer and education advancement.
                We provide a comprehensive range of features,including job listings
                ,internship,opportunities and educational resources to help
                women achieve their professional goals.</p>
            <div className='holding'>
                <p className='paragraph2'>"Empowering women isn't just the right thing to do, it's the smart thing to do. When women are given the opportunity to participate fully in the economy and society, everyone benefits". </p>
                <div className='imageposition'>
                    <img src="Images/women.png" alt="women" className='womenpic'></img>
                </div>


            </div>
            <Contact />
            <Outlet />
        </div>

    )
}

export default home;
