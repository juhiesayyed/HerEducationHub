import React from 'react'
import { Link } from 'react-router-dom'
import "./job.css"
import Nav from "../../Nav/nav"

const job = ({ data }) => {
    console.log("data=", data)
    // const Data_id = data.map(item => {
    //     return (item.SchemeName)
    // })
    // const num = data[0].id

    return (
        <>
            <Nav />
            <div>Job

                <div>
                    {
                        data.map(item => {
                            return (
                                <>
                                    <div>{item.id}</div>
                                    <div>{item.Companyname}</div>
                                    <div>{item.Jobtitle}</div>
                                    <div>{item.JobSkills}</div>
                                    <div>{item.JobDes}</div>
                                    <div>{item.Salary}</div>
                                    <div>{item.location}</div>
                                    <div>{item.entryLevel}</div>
                                    <div>{item.Eligibility}</div>
                                    <a href={`${item.link}`} target="_blank" rel="noreferrer">
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

export default job
