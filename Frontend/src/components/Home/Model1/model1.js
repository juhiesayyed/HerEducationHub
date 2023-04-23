import React from 'react'
import { Link } from 'react-router-dom'
import "./model1.css"

const model1 = (props) => {
    return (
        <>
            <div className="modules-container" id={`${props.data}`}>

                <div className='notice-board'>



                    <div className='waviy notice-heading'>
                        <span >N</span>
                        <span  >o</span>
                        <span >t</span>
                        <span  >i</span>
                        <span >c</span>
                        <span  >e</span>
                    </div>





                    {/* <h4 className='notice-heading'></h4> */}
                    <p className='notice-content'>IIM Sambalpur Placement: The Indian Institute of Management, Sambalpur (IIM S) has concluded its placement season for its MBA (2021-2023) batch. This year, the institute recorded 100 per cent placement, with the highest package of Rs 64.61 lakh per annum (domestic) and Rs 64.15 lakh per annum (international).</p>
                </div>

                <div className='description'>
                    <h3 className='h3'>{props.data}</h3>
                    <p className='content'>An educational feature is a tool or resource provided by us that is designed to help learners acquire knowledge and skills. Educational features can take many forms, such as online courses, video tutorials, interactive learning tools, quizzes, and assessments.</p>
                    <br></br>
                    <button className='buttondesign1'><Link className="info" to={`${props.data}/Highschool`}><b><span>HighSchool</span></b></Link ></button>
                    <button className='buttondesign2'><Link className="info" to={`${props.data}/under_grad/`}><b><span>UnderGraduate</span></b></Link ></button>
                    <button className='buttondesign3'><Link className="info" to={`${props.data}/Post_grad/`}><b><span>PostGraduate</span></b></Link ></button>
                </div>


            </div>



        </>
    )
}

export default model1
