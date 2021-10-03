using System;
using Microsoft.EntityFrameworkCore.Migrations;
using MySql.EntityFrameworkCore.Metadata;

namespace ORM.Migrations
{
    public partial class New : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Incidents",
                columns: table => new
                {
                    IncidentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    ReportId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Incidents", x => x.IncidentId);
                });

            migrationBuilder.CreateTable(
                name: "MissionCrew",
                columns: table => new
                {
                    MissionCrewId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    MissionId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MissionCrew", x => x.MissionCrewId);
                });

            migrationBuilder.CreateTable(
                name: "Position_Type",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Position_Type", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Report_Status",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Report_Status", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Report_Type",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Report_Type", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Missions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    StartDate = table.Column<DateTime>(type: "datetime", nullable: false),
                    EndDate = table.Column<DateTime>(type: "datetime", nullable: false),
                    MissionCrewId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Missions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Missions_MissionCrew_MissionCrewId",
                        column: x => x.MissionCrewId,
                        principalTable: "MissionCrew",
                        principalColumn: "MissionCrewId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false),
                    Surname = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false),
                    Email = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: true),
                    Manager = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    PositionTypeId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Users_Position_Type_PositionTypeId",
                        column: x => x.PositionTypeId,
                        principalTable: "Position_Type",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "IncidentsUsers",
                columns: table => new
                {
                    IncidentsIncidentId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IncidentsUsers", x => new { x.IncidentsIncidentId, x.UserId });
                    table.ForeignKey(
                        name: "FK_IncidentsUsers_Incidents_IncidentsIncidentId",
                        column: x => x.IncidentsIncidentId,
                        principalTable: "Incidents",
                        principalColumn: "IncidentId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_IncidentsUsers_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MissionCrewUsers",
                columns: table => new
                {
                    MissionsMissionCrewId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MissionCrewUsers", x => new { x.MissionsMissionCrewId, x.UserId });
                    table.ForeignKey(
                        name: "FK_MissionCrewUsers_MissionCrew_MissionsMissionCrewId",
                        column: x => x.MissionsMissionCrewId,
                        principalTable: "MissionCrew",
                        principalColumn: "MissionCrewId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MissionCrewUsers_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Reports",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    Title = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false),
                    SubmitDate = table.Column<DateTime>(type: "datetime", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.ComputedColumn),
                    EndDate = table.Column<DateTime>(type: "datetime", nullable: false),
                    Description = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false),
                    ReportTypeId = table.Column<int>(type: "int", nullable: false),
                    ReportStatusId = table.Column<int>(type: "int", nullable: false),
                    ReportingUserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reports", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Reports_Report_Status_ReportStatusId",
                        column: x => x.ReportStatusId,
                        principalTable: "Report_Status",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Reports_Report_Type_ReportTypeId",
                        column: x => x.ReportTypeId,
                        principalTable: "Report_Type",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Reports_Users_ReportingUserId",
                        column: x => x.ReportingUserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "IncidentsReports",
                columns: table => new
                {
                    IncidentsIncidentId = table.Column<int>(type: "int", nullable: false),
                    ReportId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IncidentsReports", x => new { x.IncidentsIncidentId, x.ReportId });
                    table.ForeignKey(
                        name: "FK_IncidentsReports_Incidents_IncidentsIncidentId",
                        column: x => x.IncidentsIncidentId,
                        principalTable: "Incidents",
                        principalColumn: "IncidentId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_IncidentsReports_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Position_Type",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "HR" },
                    { 2, "kitchen" },
                    { 3, "engineer" },
                    { 4, "service" },
                    { 5, "researcher" },
                    { 6, "medic" }
                });

            migrationBuilder.InsertData(
                table: "Report_Status",
                columns: new[] { "Id", "Description" },
                values: new object[,]
                {
                    { 1, "not assigned" },
                    { 2, "assigned" },
                    { 3, "in progress" },
                    { 4, "finished" },
                    { 5, "cancelled" }
                });

            migrationBuilder.InsertData(
                table: "Report_Type",
                columns: new[] { "Id", "Description" },
                values: new object[,]
                {
                    { 1, "repair" },
                    { 2, "maintenance" },
                    { 3, "medical" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_IncidentsReports_ReportId",
                table: "IncidentsReports",
                column: "ReportId");

            migrationBuilder.CreateIndex(
                name: "IX_IncidentsUsers_UserId",
                table: "IncidentsUsers",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_MissionCrewUsers_UserId",
                table: "MissionCrewUsers",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Missions_MissionCrewId",
                table: "Missions",
                column: "MissionCrewId");

            migrationBuilder.CreateIndex(
                name: "IX_Reports_ReportingUserId",
                table: "Reports",
                column: "ReportingUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Reports_ReportStatusId",
                table: "Reports",
                column: "ReportStatusId");

            migrationBuilder.CreateIndex(
                name: "IX_Reports_ReportTypeId",
                table: "Reports",
                column: "ReportTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_PositionTypeId",
                table: "Users",
                column: "PositionTypeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "IncidentsReports");

            migrationBuilder.DropTable(
                name: "IncidentsUsers");

            migrationBuilder.DropTable(
                name: "MissionCrewUsers");

            migrationBuilder.DropTable(
                name: "Missions");

            migrationBuilder.DropTable(
                name: "Reports");

            migrationBuilder.DropTable(
                name: "Incidents");

            migrationBuilder.DropTable(
                name: "MissionCrew");

            migrationBuilder.DropTable(
                name: "Report_Status");

            migrationBuilder.DropTable(
                name: "Report_Type");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Position_Type");
        }
    }
}
