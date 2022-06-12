using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;

namespace ORM.Models
{
    public class Reports
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string Title { get; set; }
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        [DefaultValue("getutcdate()")]
        public DateTime SubmitDate { get; set; }
        public DateTime EndDate { get; set; }
        [Required]
        [MaxLength(50)]
        public string Description { get; set; }

        [ForeignKey("ReportType")]
        public int? ReportTypeId { get; set; }
        public ReportType ReportType { get; set; }

        [ForeignKey("ReportStatus")]
        public int ReportStatusId { get; set; }
        public ReportStatus ReportStatus { get; set; }

        [ForeignKey("Users")]
        public int ReportingUserId { get; set; }
        [JsonIgnore]
        public Users ReportingUser { get; set; }
/*
        [ForeignKey("Users")]
        public int OperatingUserId { get; set; }
        [JsonIgnore]
        public virtual Users OperatingUser { get; set; }*/

        public ICollection<Incidents> Incidents { get; set; }
    }
}
