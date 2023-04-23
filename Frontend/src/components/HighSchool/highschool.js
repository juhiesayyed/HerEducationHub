import React from 'react'
// import { Link } from 'react-router-dom'

const highschool = ({ data }) => {
    console.log(data)
    return (
        <>
            <div>HighSchool

                {/* <div>
                    {
                        data.map(item => {
                            return (
                                <>
                                    <div>{item.id}</div>
                                    <div>{item.SchemeName}</div>
                                    <div>{item.SchemeDescription}</div>
                                    <div>{item.SchemeElig}</div>
                                    <Link to="/{item.SchemeLink}">{item.SchemeLink}</Link>
                                </>
                            )
                        })
                    }
                </div> */}
            </div></>
    )
}

export default highschool
