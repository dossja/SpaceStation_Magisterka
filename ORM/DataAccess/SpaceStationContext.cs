using Microsoft.EntityFrameworkCore;
using ORM.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ORM.DataAccess
{
    public class SpaceStationContext : DbContext
    {
        public SpaceStationContext(DbContextOptions options) : base(options) { }

        public DbSet<Users> Users { get; set; }
        public DbSet<PositionType> Position_Type { get; set; }
        public DbSet<ReportType> Report_Type { get; set; }
        public DbSet<ReportStatus> Report_Status { get; set; }
        public DbSet<Reports> Reports { get; set; }
        public DbSet<Incidents> Incidents { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PositionType>()
                .HasData(
                    new PositionType { Id = 1, Name = "HR" },
                    new PositionType { Id = 2, Name = "kitchen" },
                    new PositionType { Id = 3, Name = "engineer" },
                    new PositionType { Id = 4, Name = "service" },
                    new PositionType { Id = 5, Name = "researcher" },
                    new PositionType { Id = 6, Name = "medic" }
                    );

            modelBuilder.Entity<ReportStatus>()
                .HasData(
                    new ReportStatus { Id = 1, Description = "not assigned" },
                    new ReportStatus { Id = 2, Description = "assigned" },
                    new ReportStatus { Id = 3, Description = "in progress" },
                    new ReportStatus { Id = 4, Description = "finished" },
                    new ReportStatus { Id = 5, Description = "cancelled" }
            );

            modelBuilder.Entity<ReportType>()
                .HasData(
                    new ReportType { Id = 1, Description = "repair" },
                    new ReportType { Id = 2, Description = "maintenance" },
                    new ReportType { Id = 3, Description = "medical" }
            );

            modelBuilder.Entity<Incidents>().HasKey(inc => new { inc.UserId, inc.ReportId });
        }
    }
}
