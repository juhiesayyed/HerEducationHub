import React from 'react'
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link";

const nav = ({ props }) => {
    return (


        <div className='Nav-bg'>
            {/* <div className='image-container'> */}
            <img className="Image" alt='error' src="/Images/Logo.png" />
            {/* </div> */}

            {/* <div > */}
            <nav className='Navigation'>
                <HashLink className='Text' smooth to="/#">
                    {/* <Link className="Text" to="/"> */}
                    <b>Home</b>
                    {/* </Link> */}
                </HashLink>
                <HashLink className='Text' smooth to="/#Education">
                    {/* <Link className="Text" to="/Education"> */}
                    <b>Education</b>
                    {/* </Link> */}
                </HashLink>
                <HashLink className='Text' smooth to="/#Scholarship">
                    {/* <Link className="Text" to="/Education"> */}
                    <b>Scholarship</b>
                    {/* </Link> */}
                </HashLink>
                <HashLink className='Text' smooth to="/#Internship">
                    {/* <Link className="Text" to="/Internship"> */}
                    <b>Internships</b>
                    {/* </Link> */}
                </HashLink>
                <HashLink className='Text' smooth to="/#Jobs">
                    {/* <Link className="Text" to="/Jobs"> */}
                    <b>Jobs</b>
                    {/* </Link> */}
                </HashLink>
                <HashLink className='Text' smooth to="/#Schemes">
                    {/* <Link className="Text" to="/Jobs"> */}
                    <b>Schemes</b>
                    {/* </Link> */}
                </HashLink>
                {/* <HashLink smooth to="/#Blogs"> */}
                <Link className="Text" to="/Blogs">
                    <b>Blogs</b>
                </Link>
                {/* </HashLink> */}
                <HashLink className='Text' smooth to="/#Contact">
                    {/* <Link className="Text" to="/Contact"> */}
                    <b>Contact</b>
                    {/* </Link> */}
                </HashLink>
            </nav>
            {/* </div> */}

        </div>




    )
}

export default nav
