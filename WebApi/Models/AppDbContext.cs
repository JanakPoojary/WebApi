using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Models
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
    public DbSet<EmployeeDetails> Employee { get; set; }
    public DbSet<LeaveDetails> Leave { get; set; }
        public DbSet<EmpLeave> EmpLeaves { get; set; }
    }
}
