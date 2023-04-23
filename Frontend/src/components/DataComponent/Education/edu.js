import React from 'react'
// import { Link } from 'react-router-dom'
import "./edu.css"
import Nav from "../../Nav/nav"

const edu = ({ data }) => {
    console.log("data in Edu=", data)

    return (
        <>
            <Nav />
            <div>

                <div>
                    {
                        data.map(item => {
                            return (
                                <>
                                    <div className='Edu-container'>
                                        <div className='Edu-Title'>Hackathontitle={item.hackathontitle}</div>
                                        {/* <div>{item.id}</div> */}
                                        <div>
                                            <div>Organizer={item.Organizer}</div>
                                        </div>
                                        <div>
                                            <div>HackDesc={item.HackDesc}</div>
                                            <div>Startdate={item.Startdate}</div>
                                            <div>Enddate={item.Enddate}</div>
                                            <div>Location={item.Location}</div>
                                            <a href={`${item.Link}`} target="_blank" rel="noreferrer">
                                                Click to open
                                            </a >
                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>



            </div >
        </>
    )
}

export default edu
