﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using System.Text.Json.Serialization;

namespace ORM.Models
{
    public class Incidents
    {
        [Key]
        public int IncidentId { get; set; }

        public int UserId { get; set; }
        [JsonIgnore]
        public Users User { get; set; }

        public int ReportId { get; set; }
        [JsonIgnore]
        public Reports Report { get; set; }
    }
}