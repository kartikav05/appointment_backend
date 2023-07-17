const mysql2 = require('mysql2');
require('dotenv').config

const express = require("express");
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());

app.listen(3001, () => {
    console.log("running backend server");
})

const connection = mysql2.createConnection({
  host: 'localhost',
  port: 3306,
  database: process.env.db,
  user: 'root',
  password: process.env.pass,
});

app.post('/bookapt', (req, res) => {
    firstName=req.body.firstName,
    lastName=req.body.lastName,
    email=req.body.Email,
   phone= req.body.Phone,
    Gender=req.body.Gender,
    street=req.body.Street,
   city=  req.body.City,
   state=  req.body.State,
    country=req.body.Country
    aptTime=req.body.AptTime

    //const formattedDateTime = new Date(aptTime).toISOString().slice(0, 19).replace('T', ' ');
  

    connection.query(
"INSERT INTO  Appointment (Fname, Lname, Email, Phone, Gender, Street, City, State, Country, AptTime)VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)",
        [firstName, lastName, email, phone, Gender, street, city, state, country,aptTime],  
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                console.log(err)
            }
        }
    )
})