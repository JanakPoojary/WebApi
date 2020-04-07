using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class EmployeeDetails
    {

        [Key]
        public int e_id { get; set; }
        public string e_name { get; set; }
        public string e_dob { get; set; }
        public string e_doj { get; set; }
        public int e_salary { get; set; }
        public string e_email { get; set; }
    }
}
