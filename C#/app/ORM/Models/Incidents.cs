using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ORM.Models
{
    public class Incidents
    {
        [Key, Column(Order = 1)]
        public int UserId { get; set; }
        public Users User { get; set; }

        [Key, Column(Order = 2)]
        public int ReportId { get; set; }
        public Reports Report { get; set; }
    }
}
