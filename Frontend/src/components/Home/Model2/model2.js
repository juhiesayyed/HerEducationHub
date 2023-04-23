import React from 'react'
import "./model2.css"
import { Link } from 'react-router-dom';

const model2 = (props) => {
    return (
        <>
            <div className="modules-container1" id={`${props.data}`}>


                <div className='description1'>
                    <h3 className='h31'>{props.data}</h3>
                    <p className='content1'>An educational feature is a tool or resource provided by us that is designed to help learners acquire knowledge and skills. Educational features can take many forms, such as online courses, video tutorials, interactive learning tools, quizzes, and assessments.</p>
                    <br></br>
                    <button className='buttondesign11'><Link className="info" to={`${props.data}/Highschool`}><b><span>HighSchool</span></b></Link ></button>
                    <button className='buttondesign21'><Link className="info" to={`${props.data}/under_grad/`}><b><span>Under_Graduate</span></b></Link ></button>
                    <button className='buttondesign31'><Link className="info" to={`${props.data}/Post_grad/`}><b><span>Post_Graduate</span></b></Link ></button>
                </div>
                <div className='notice-board1'>


                    <div className='waviy notice-heading'>
                        <span >N</span>
                        <span  >o</span>
                        <span >t</span>
                        <span  >i</span>
                        <span >c</span>
                        <span  >e</span>
                    </div>
                    {/* <h4 className='notice-heading1'>what is this</h4> */}
                    <p className='notice-content1'>IIM Sambalpur Placement: The Indian Institute of Management, Sambalpur (IIM S) has concluded its placement season for its MBA (2021-2023) batch. This year, the institute recorded 100 per cent placement, with the highest package of Rs 64.61 lakh per annum (domestic) and Rs 64.15 lakh per annum (international).</p>
                </div>


            </div>

        </>
    )
}

export default model2
