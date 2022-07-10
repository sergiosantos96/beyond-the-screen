const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const path = require("path");
const hbs = require("hbs");
const movies = require('./utils/movies');

// Register views
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Set views
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render('index')
});

app.get('/about', (req, res) => {
  res.send("About section")
})

app.get('/movies', (req, res) => {
  res.render('movies')
})

app.get("*", (req, res) => {
  res.render('errorPage')
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000..");
});
