using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ORM.Models
{
    public class Users
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string Name { get; set; }
        [Required]
        [MaxLength(50)]
        public string Surname { get; set; }
        [MaxLength(100)]
        public string Email { get; set; }
        [Required]
        public bool Manager { get; set; }

        [ForeignKey("PositionType")]
        public int PositionTypeId { get; set; }
        public PositionType PositionType { get; set; }
    }
}
