const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const handlebars = require("express-handlebars");
const port = 3000;

const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));

// Xử lí dữ liệu form data
app.use(
    express.urlencoded({
        extended: true,
    }),
);

// xử lí dữ liệu xml, javascript,...
app.use(express.json());

// HTTP loger
app.use(morgan("combined"));

//template engine
app.engine(
    "hbs",
    handlebars({
        extname: ".hbs",
    }),
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
console.log(path.join(__dirname, "resources", "views"));

// routes initlaze
route(app);

app.listen(port, () => {
    return console.log(`Example app listening on port ${port}`);
});
