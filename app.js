const express = require("express");
const mongoose = require("mongoose");
const routeReport = require("./routes/reportRoutes")
const routeAuth = require("./routes/authRoute")
const dotenv = require("dotenv")
const cors = require("cors");


dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors
app.use(cors());

const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL

//routes auth
app.use("/api/auth", routeAuth)
//routes report
app.use("/api/reports", routeReport)

//konek database dan menjalankan server
mongoose
    .connect(MONGO_URL)
    .then(()=>{
        console.log('database connect succesfully')
        app.listen(PORT, () =>{
            console.log(`listening at port ${PORT}`)
        })
    })
    .catch((error)=>{
        console.log(error)
    })

