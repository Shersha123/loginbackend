
const express = require("express");
const app = express();
require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const port = 5000;



app.get("/", function (req, res) {
    res.status(201).json("Welcome to User Profile")
})

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    // origin: "http://tranquil-fairy-da0e18.netlify.app"
    origin: "http://localhost:3000"
}));
app.use(router);


app.listen(port, () => {
    console.log(`server start at port no : ${port}`);
})