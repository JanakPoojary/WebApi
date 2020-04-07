using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class EmpLeave
    {
        [Key]
        public int el_id { get; set; }
        public int? empId { get; set; }
        [ForeignKey("empId")]
        public virtual EmployeeDetails Employee { get; set; }
        public int? lveId { get; set; }
        [ForeignKey("lveId")]
        public LeaveDetails Leave { get; set; }
        public string el_start { get; set; }
        public string el_end { get; set; }
        public string e_status { get; set; }
    }
}
