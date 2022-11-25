const express = require("express")
const bodyParser = require("body-parser")
const fs = require('fs');
// create our express app
const app = express()
// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
// route

const routes = require('./routes/Route')
app.use('/', routes)
//start server
app.listen(4020, ()=>{
    console.log("listeniing at port:4020")
}) 

// app.get("/", (req, res) => {
//     var temo=console.log(__dirname);
//   });

  app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
  });


  // app.get("/", (req, res) => {
  //   res.sendFile(`${__dirname}/routes/index.html`)
  // });

  
  

  
//   app.use(express.static(path.join(__dirname, "js")))
// app.use(express.static('routes'));