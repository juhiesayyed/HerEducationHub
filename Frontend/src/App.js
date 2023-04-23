import './App.css';
import "./components/Nav/nav.css";
import "./components/Home/SlideShow/slideshow.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import react from "react";
// import { Home } from "./components/Home/home";
import { useState, useEffect } from 'react';
import Home from "../src/components/Home/home";
import NoPage from "../src/components/NoPage/nopage";
import Signup from "./components/Signup_Page/signup_page";
import Login from "./components/Login_page/login_page";
// import UnderGrad from "./components/Under_Grad/under_grad"
// import PostGrad from "./components/Post_Grad/post_grad"
// import HighSchool from "./components/HighSchool/highschool"
import Blogs from "./components/Blogs/blogs"

import Edu from "./components/DataComponent/Education/edu"
import Internship from "./components/DataComponent/Internship/internship"
import Job from "./components/DataComponent/Job/job"
import Schemes from "./components/DataComponent/Schemes/schemes"
import Scholarship from "./components/DataComponent/Scholarship/scholarship"
function App() {

  // WomenGovSchemes Data =>1
  const [Data1, setData1] = useState({})
  useEffect(() => {
    fetch("http://localhost:5000/WomenGovSchemes")
      .then(res => res.json())
      .then(data => {
        setData1(data)
      })
  }, [])
  console.log("Data1=", Data1)

  // JobList Data =>2
  const [Data2, setData2] = useState({})
  useEffect(() => {
    fetch("http://localhost:5000/JobList")
      .then(res => res.json())
      .then(data => {
        setData2(data)
      })
  }, [])
  console.log("Data2=", Data2)

  // InternshipList Data =>3
  const [Data3, setData3] = useState({})
  useEffect(() => {
    fetch("http://localhost:5000/InternshipList")
      .then(res => res.json())
      .then(data => {
        setData3("Data3=", data)
      })
  }, [])
  console.log(Data3)

  // Hackethons Data =>4
  const [Data4, setData4] = useState({})
  useEffect(() => {
    fetch("http://localhost:5000/Hackethons")
      .then(res => res.json())
      .then(data => {
        setData4(data)
      })
  }, [])
  console.log("Data4=", Data4)

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />}></ Route>
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/Blogs" element={<Blogs />} />

        {/* Sending Hackathon Data here */}
        {/* Done */}
        {/* {console.log("Data4 in Html=", Data4)}s */}
        <Route path="/Education/Under_grad" element={<Edu data={Data4} />} />
        <Route path="/Education/Post_grad" element={<Edu data={Data4} />} />
        <Route path="/Education/HighSchool" element={<Edu data={Data4} />} />

        <Route path="/Scholarship/Under_grad" element={<Scholarship data={Data1} />} />
        <Route path="/Scholarship/Post_grad" element={<Scholarship data={Data1} />} />
        <Route path="/Scholarship/HighSchool" element={<Scholarship data={Data1} />} />

        {/* Done */}
        <Route path="/Internship/Under_grad" element={<Internship data={Data3} />} />
        <Route path="/Internship/Post_grad" element={<Internship data={Data3} />} />
        <Route path="/Internship/HighSchool" element={<Internship data={Data3} />} />

        {/* Done */}
        <Route path="/Jobs/Under_grad" element={<Job data={Data2} />} />
        <Route path="/Jobs/Post_grad" element={<Job data={Data2} />} />
        <Route path="/Jobs/HighSchool" element={<Job data={Data2} />} />

        {/* Done */}
        <Route path="/Schemes/Under_grad" element={<Schemes data={Data1} />} />
        <Route path="/Schemes/Post_grad" element={<Schemes data={Data1} />} />
        <Route path="/Schemes/HighSchool" element={<Schemes data={Data1} />} />


        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter >

  );
}

export default App;
