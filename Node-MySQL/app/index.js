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

const user = require("./routers/ReportsRouter.js");
const report = require("./routers/UsersRouter.js");
const incident = require("./routers/IncidentsRouter.js");
const missionCrew = require("./routers/MissionCrewRouter.js");
const positionType = require("./routers/PositionTypeRouter.js");
const reportStatus = require("./routers/ReportStatusRouter.js");
const reportType = require("./routers/ReportTypeRouter.js");
const mission = require("./routers/MissionsRouter.js");

const app = express();

app.use(express.json());

app.use("/", user);
app.use("/", report);
app.use("/", incident);
app.use("/", missionCrew);
app.use("/", positionType);
app.use("/", reportStatus);
app.use("/", reportType);
app.use("/", mission);

app.listen(5000, () => {
    console.log("Server listening at 5000");
})