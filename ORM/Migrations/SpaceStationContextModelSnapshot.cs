﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ORM.DataAccess;

namespace ORM.Migrations
{
    [DbContext(typeof(SpaceStationContext))]
    partial class SpaceStationContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 64)
                .HasAnnotation("ProductVersion", "5.0.10");

            modelBuilder.Entity("ORM.Models.Incidents", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<int>("ReportId")
                        .HasColumnType("int");

                    b.HasKey("UserId", "ReportId");

                    b.HasIndex("ReportId");

                    b.ToTable("Incidents");
                });

            modelBuilder.Entity("ORM.Models.MissionCrew", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<int>("MissionId")
                        .HasColumnType("int");

                    b.HasKey("UserId", "MissionId");

                    b.ToTable("MissionCrew");
                });

            modelBuilder.Entity("ORM.Models.Missions", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("datetime");

                    b.Property<int?>("MissionCrewMissionId")
                        .HasColumnType("int");

                    b.Property<int?>("MissionCrewUserId")
                        .HasColumnType("int");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("datetime");

                    b.HasKey("Id");

                    b.HasIndex("MissionCrewUserId", "MissionCrewMissionId");

                    b.ToTable("Missions");
                });

            modelBuilder.Entity("ORM.Models.PositionType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.HasKey("Id");

                    b.ToTable("Position_Type");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "HR"
                        },
                        new
                        {
                            Id = 2,
                            Name = "kitchen"
                        },
                        new
                        {
                            Id = 3,
                            Name = "engineer"
                        },
                        new
                        {
                            Id = 4,
                            Name = "service"
                        },
                        new
                        {
                            Id = 5,
                            Name = "researcher"
                        },
                        new
                        {
                            Id = 6,
                            Name = "medic"
                        });
                });

            modelBuilder.Entity("ORM.Models.ReportStatus", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.HasKey("Id");

                    b.ToTable("Report_Status");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "not assigned"
                        },
                        new
                        {
                            Id = 2,
                            Description = "assigned"
                        },
                        new
                        {
                            Id = 3,
                            Description = "in progress"
                        },
                        new
                        {
                            Id = 4,
                            Description = "finished"
                        },
                        new
                        {
                            Id = 5,
                            Description = "cancelled"
                        });
                });

            modelBuilder.Entity("ORM.Models.ReportType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.HasKey("Id");

                    b.ToTable("Report_Type");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "repair"
                        },
                        new
                        {
                            Id = 2,
                            Description = "maintenance"
                        },
                        new
                        {
                            Id = 3,
                            Description = "medical"
                        });
                });

            modelBuilder.Entity("ORM.Models.Reports", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("datetime");

                    b.Property<int>("ReportStatusId")
                        .HasColumnType("int");

                    b.Property<int>("ReportTypeId")
                        .HasColumnType("int");

                    b.Property<int>("ReportingUserId")
                        .HasColumnType("int");

                    b.Property<DateTime>("SubmitDate")
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnType("datetime");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.HasKey("Id");

                    b.HasIndex("ReportStatusId");

                    b.HasIndex("ReportTypeId");

                    b.HasIndex("ReportingUserId");

                    b.ToTable("Reports");
                });

            modelBuilder.Entity("ORM.Models.Users", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100)");

                    b.Property<bool>("Manager")
                        .HasColumnType("tinyint(1)");

                    b.Property<int?>("MissionCrewMissionId")
                        .HasColumnType("int");

                    b.Property<int?>("MissionCrewUserId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<int>("PositionTypeId")
                        .HasColumnType("int");

                    b.Property<string>("Surname")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.HasKey("Id");

                    b.HasIndex("PositionTypeId");

                    b.HasIndex("MissionCrewUserId", "MissionCrewMissionId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("ORM.Models.Incidents", b =>
                {
                    b.HasOne("ORM.Models.Reports", "Report")
                        .WithMany()
                        .HasForeignKey("ReportId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ORM.Models.Users", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Report");

                    b.Navigation("User");
                });

            modelBuilder.Entity("ORM.Models.Missions", b =>
                {
                    b.HasOne("ORM.Models.MissionCrew", null)
                        .WithMany("Mission")
                        .HasForeignKey("MissionCrewUserId", "MissionCrewMissionId");
                });

            modelBuilder.Entity("ORM.Models.Reports", b =>
                {
                    b.HasOne("ORM.Models.ReportStatus", "ReportStatus")
                        .WithMany()
                        .HasForeignKey("ReportStatusId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ORM.Models.ReportType", "ReportType")
                        .WithMany()
                        .HasForeignKey("ReportTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ORM.Models.Users", "ReportingUser")
                        .WithMany()
                        .HasForeignKey("ReportingUserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ReportingUser");

                    b.Navigation("ReportStatus");

                    b.Navigation("ReportType");
                });

            modelBuilder.Entity("ORM.Models.Users", b =>
                {
                    b.HasOne("ORM.Models.PositionType", "PositionType")
                        .WithMany()
                        .HasForeignKey("PositionTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ORM.Models.MissionCrew", null)
                        .WithMany("User")
                        .HasForeignKey("MissionCrewUserId", "MissionCrewMissionId");

                    b.Navigation("PositionType");
                });

            modelBuilder.Entity("ORM.Models.MissionCrew", b =>
                {
                    b.Navigation("Mission");

                    b.Navigation("User");
                });
#pragma warning restore 612, 618
        }
    }
}
