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
        public DbSet<Reports> Reports { get; set; }
    }
}
