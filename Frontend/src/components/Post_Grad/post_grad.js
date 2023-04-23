import React from 'react'
// import { Link } from 'react-router-dom'

const post_grad = ({ data }) => {
    console.log(data)
    return (
        <>
            <div>Post Graduate

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

export default post_grad
