const app = require("./backend/index");
const debug = require("debug")("node-angular");
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const routes = require('./backend/routes/students');
const path = require("path");

//app.use('/students', routes);
//app.set("port", 3000);
//app.use(cors());
const server = http.createServer(app);
//server.on("error", onError);
//server.on("listening", onListening);
//server.listen(3000, () => console.log("Server Started at port 3000"));
