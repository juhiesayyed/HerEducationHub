import React from 'react'
// import { Link } from 'react-router-dom'

const under_grad = ({ data }) => {
    console.log(data)
    // const Data_id = data.map(item => {
    //     return (item.SchemeName)
    // })
    // const num = data[0].id

    return (
        <>
            <div>under Graduate

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



            </div>
        </>
    )
}

export default under_grad
