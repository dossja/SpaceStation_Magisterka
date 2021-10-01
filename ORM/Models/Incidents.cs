using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ORM.Models
{
    public class Incidents
    {
        public int OperatingUserId { get; set; }
        public Users OperatingUser { get; set; }

        public int ReportId { get; set; }
        public Reports Report { get; set; }
    }
}
