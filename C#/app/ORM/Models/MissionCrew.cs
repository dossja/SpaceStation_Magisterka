using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ORM.Models
{
    public class MissionCrew
    {
        [Key, Column(Order = 1)]
        public int UserId { get; set; }
        public IList<Users> User { get; set; }

        [Key, Column(Order = 2)]
        public int MissionId { get; set; }
        public IList<Missions> Mission { get; set; }
    }
}
