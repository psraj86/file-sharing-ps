const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");

const connectDB = require("./config/db");
// Config dot env
dotenv.config({path:"./config/config.env"});
connectDB();

app.use(express.static('public'))

//Parse
app.use(express.json())
// Template engine
app.set("views",path.join(__dirname,"/views"));
app.set("view engine","ejs")

app.use("/api/files", require("./routes/files"));
app.use("/files",require("./routes/show.js"));
app.use("/files/download",require("./routes/download"));
const PORT = process.env.PORT || 3000;
app.listen(PORT,console.log(`Server is running on the PORT ${PORT}`));