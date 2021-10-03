using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ORM.Models
{
    public class MissionCrew
    {
        [Key]
        public int MissionCrewId { get; set; }

        public int UserId { get; set; }
        public ICollection<Users> User { get; set; }

        public int MissionId { get; set; }
        public ICollection<Missions> Mission { get; set; }
    }
}
