const path = require("path")

/*
  ---- EXPRESS ----
  We are using Express framework for running our 
  web application and then starting an http server with it
*/
const express = require("express");
const app = express();
const server = require("http").Server(app);
const PORT = process.env.PORT || 80;
/*
  ---- Misc. dependency imports followed -----
*/
const bodyParser = require("body-parser");
const req = require("express/lib/request");

/*
  ---- APP USAGE ----
*/

app.set("view engine", "ejs");
app.use("/static", express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(favicon(path.join(__dirname,'public','resources','favicon.ico')));

// ------- SOURCE -------

// ---------------------------------------Formal Routes-------------------------------------

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/start", (req, res) => {
  res.render("routes1.ejs");
});

app.get("/ihavenoideawhatimdoinghere", (req, res) => {
  res.render("routes2.ejs");
})

app.get("/lmaoooooooooooooooooo", (req, res) => {
  res.render("routes3.ejs");
})

app.get("/routes/kalana", (req, res) => {
  res.render("riddle1.ejs");
})

app.get("/riddle1/suchismit", (req, res) => {
  res.render("identify1.ejs");
})

app.get("/identify1/stella", (req, res) => {
  res.render("button.ejs");
})


app.get("/button/scroll", (req, res) => {
  res.render("scroll.ejs");
})

app.get("/scroll/math", (req, res) => {
  res.render("math1.ejs");
})

app.get("/math/whocouldthisbe", (req, res) => {
  res.render("riddle2.ejs");
})

app.get("/riddle2/krittika", (req, res) => {
  res.render("console.ejs");
})

app.get("/console/iwonderwhatthisis", (req, res) => {
  res.render("identify2.ejs");
})

app.get("/identify2/divyesh", (req, res) => {
  res.render("math2.ejs");
})

app.get("/meth/whocouldthisbe", (req, res) => {
  res.render("identify3.ejs");
})


app.get("/identify3/anjishnu", (req, res) => {
  res.render("scroll1.ejs");
})

app.get("/scroll2/qrlmao", (req, res) => {
  res.render("qrcodes.ejs");
})

app.get("/qrlmao/zazu", (req, res) => {
  res.render("audiopage.ejs");
})

app.get("/finalpage/dQw4w9WgXcQ", (req, res) => {
  res.render("finalpage.ejs")
})

//-----------------Trollin Routes----------------------------------

app.get("/manka", (req, res) => {
  res.render("manka.ejs")
})

app.get("/taylorswift", (req, res) => {
  res.render("taylor.ejs")
})

app.get("*", (req, res) => {
  res.render("rickroll.ejs");
});

server.listen(PORT);
console.log("Server now running on port " + PORT);
