// const express = require("express");
// const app = express();
// const mysql = require("mysql");
// const cors = require("cors");

// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//     user: "root",
//     host: "localhost",
//     password: "root",
//     database: "space_station_Node",
// });

// const { sequelize } = require("./models");

// async function main() {
//     await sequelize.sync({ alter: true });
// }

// main();

const express = require("express");
const cors = require("cors");

const user = require("./routers/UsersRouter.js");

const app = express();

app.use(express.json());

app.use("/", user);

app.listen(5000, () => {
    console.log("Server listening at 5000");
})