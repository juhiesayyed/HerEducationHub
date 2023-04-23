import React from 'react'
import { Link } from 'react-router-dom'
import "./internship.css"
import Nav from "../../Nav/nav"

const internship = ({ data }) => {
    console.log("data=", data)
    // const Data_id = data.map(item => {
    //     return (item.SchemeName)
    // })
    // const num = data[0].id

    return (
        <>
            <Nav />
            <div>internship

                <div>
                    {
                        data.map(item => {
                            return (
                                <>
                                    <div>{item.id}</div>
                                    <div>{item.Companyname}</div>
                                    <div>{item.Position}</div>
                                    <div>{item.Requirement}</div>
                                    <div>{item.LevelOfEducation}</div>
                                    <div>{item.Stipend}</div>
                                    <div>{item.Location}</div>
                                    <div>{item.Eligibility}</div>
                                    {/* <Link to="/{item.Link}">{item.SchemeLink}</Link> */}
                                    <a href={`${item.Link}`} target="_blank" rel="noreferrer">
                                        Click to open
                                    </a>
                                </>
                            )
                        })
                    }
                </div>



            </div>
        </>
    )
}

export default internship
