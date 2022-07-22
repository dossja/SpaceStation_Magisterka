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
app.use(cors());

app.use("/", user);
app.use("/", report);
app.use("/", incident);
app.use("/", missionCrew);
app.use("/", positionType);
app.use("/", reportStatus);
app.use("/", reportType);
app.use("/", mission);

const { sequelize } = require("./models");

async function main() {
    await sequelize.sync({ alter: true });

    const PositionType = require("./models").PositionType;

    PositionType.findAll().then(pt => {
        if (pt.length == 0) {
            PositionType.create({ id: 1, name: "HR" });
            PositionType.create({ id: 2, name: "kitchen" });
            PositionType.create({ id: 3, name: "engineer" });
            PositionType.create({ id: 4, name: "service" });
            PositionType.create({ id: 5, name: "researcher" });
            PositionType.create({ id: 6, name: "medic" });
        }
    });

    const ReportType = require("./models").ReportType;

    ReportType.findAll().then(rt => {
        if (rt.length == 0) {
            ReportType.create({ id: 1, description: "repair" });
            ReportType.create({ id: 2, description: "maintenance" });
            ReportType.create({ id: 3, description: "medical" });
        }
    });

    const ReportStatus = require("./models").ReportStatus;

    ReportStatus.findAll().then(rs => {
        if (rs.length == 0) {
            ReportStatus.create({ id: 1, description: "not assigned" });
            ReportStatus.create({ id: 2, description: "assigned" });
            ReportStatus.create({ id: 3, description: "in progress" });
            ReportStatus.create({ id: 4, description: "finished" });
            ReportStatus.create({ id: 5, description: "cancelled" });
        }
    });

}

main();

app.listen(5000, () => {
    console.log("Server listening at 5000");
})