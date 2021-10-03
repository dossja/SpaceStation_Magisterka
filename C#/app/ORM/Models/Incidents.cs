using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ORM.Models
{
    public class Incidents
    {
        [Key]
        public int IncidentId { get; set; }

        public int UserId { get; set; }
        public ICollection<Users> User { get; set; }

        public int ReportId { get; set; }
        public ICollection<Reports> Report { get; set; }
    }
}
