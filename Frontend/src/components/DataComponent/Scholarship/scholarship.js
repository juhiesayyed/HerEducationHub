import React from 'react'
import { Link } from 'react-router-dom'
import "./scholarship.css"
import Nav from "../../Nav/nav"
const scholarship = ({ data }) => {
    console.log("data=", data)
    // const Data_id = data.map(item => {
    //     return (item.SchemeName)
    // })
    // const num = data[0].id

    return (
        <>
            <Nav />
            <div>Scholarship

                <div>
                    {
                        data.map(item => {
                            return (
                                <>
                                    <div>{item.id}</div>
                                    <div>{item.SchemeName}</div>
                                    <div>{item.SchemeDescription}</div>
                                    <div>{item.SchemeElig}</div>
                                    <div>{item.Eligibility}</div>
                                    {/* <Link to="/{item.SchemeLink}">{item.SchemeLink}</Link> */}
                                    <a href={`${item.SchemeLink}`} target="_blank" rel="noreferrer">
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

export default scholarship
