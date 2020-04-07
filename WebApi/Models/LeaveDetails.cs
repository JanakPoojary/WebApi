using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class LeaveDetails
    {
        [Key]
        public int l_id { get; set; }
        public string l_name { get; set; }
        public int no_of_days { get; set; }
    }
}
