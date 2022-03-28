const path = require("path")

/*
  ---- EXPRESS ----
  We are using Express framework for running our 
  web application and then starting an http server with it
*/
const express = require("express");
const app = express();
const server = require("http").Server(app);
const PORT = 80;
/*
  ---- Misc. dependency imports followed -----
*/
const bodyParser = require("body-parser");
const req = require("express/lib/request");

/*
  ---- APP USAGE ----
*/

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(favicon(path.join(__dirname,'public','resources','favicon.ico')));

// ------- SOURCE -------

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/start", (req, res) => {
  res.render("routes1.ejs");
});

app.get("/ihavenoideawhatimdoinghere", (req, res) => {
  res.render("routes2.ejs");
})


app.get("/hello/manka", (req, res) => {
  res.redirect("https://getbootstrap.com/docs/5.1/layout/grid/");
});

app.get("/manka", (req, res) => {
  res.render("manka.ejs")
})

app.get("/taylorswift", (req, res) => {
  res.render("taylor.ejs")
})

app.get("/consoletest", (req, res) => {
  res.render("console.ejs")
})

app.get("/riddle1test", (req,res) => {
  res.render("riddle1.ejs")
})

app.get("/identify1test", (req, res) => {
  res.render("identify1.ejs")  
})

app.get("/scrolltest", (req, res) => {
  res.render("scrolltest.ejs")
})

app.get("*", (req, res) => {
  // res.status(404).redirect("https://youtu.be/dQw4w9WgXcQ");
  res.render("rickroll.ejs");
});

server.listen(PORT);
console.log("Server now running on port " + PORT);
