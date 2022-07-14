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

const { sequelize } = require("./models");

async function main() {
    await sequelize.sync({ alter: true });
}

main();