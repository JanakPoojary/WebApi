using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class DisplayModel
    {
        public int elid { get; set; }
        public int? emp_id { get; set; }
        public string emp_name { get; set; }
        public string start { get; set; }
        public string end { get; set; }
        public int leave_total { get; set; }
        public int leave_left { get; set; }
        public int leave_id { get; set; }
        public string leave_name { get; set; }
        public int leave_day { get; set; }
        public string status { get; set; }
    }
}
