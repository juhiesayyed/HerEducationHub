const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
var Data1
var Data2
var Data3
var Data4
fetch('https://apihehub.herokuapp.com/HEHGovSchemes/women/WomenGovSchemes/')
    .then((response) => response.json())
    .then(data => {
        console.log(data);
        Data1 = data
    })

fetch('https://apihehub.herokuapp.com/HEHGovSchemes/women/JobList/')
    .then((response) => response.json())
    .then(data => {
        console.log(data);
        Data2 = data
    })
fetch('https://apihehub.herokuapp.com/HEHGovSchemes/women/IntershipList/')
    .then((response) => response.json())
    .then(data => {
        console.log(data);
        Data3 = data
    })
fetch('https://apihehub.herokuapp.com/HEHGovSchemes/women/Hackethons/')
    .then((response) => response.json())
    .then(data => {
        console.log(data);
        Data4 = data
    })
console.log("Data1=", Data1)
console.log("Data2=", Data2)
console.log("Data3=", Data3)
console.log("Data4=", Data4)

app.get("/WomenGovSchemes", (req, res) => {
    res.json(Data1)

})
app.get("/JobList", (req, res) => {
    res.json(Data2)

})
// No Data Currently
app.get("/InternshipList", (req, res) => {
    res.json(Data3)

})
app.get("/Hackethons", (req, res) => {
    res.json(Data4)

})



app.listen(5000)
