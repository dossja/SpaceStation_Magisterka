﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using System.Text.Json.Serialization;

namespace ORM.Models
{
    public class MissionCrew
    {
        [Key]
        public int MissionCrewId { get; set; }

        public int UserId { get; set; }
        public Users User { get; set; }

        public int MissionId { get; set; }
        [JsonIgnore]
        public Missions Mission { get; set; }
    }
}