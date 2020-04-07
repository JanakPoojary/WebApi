using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeDetailsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EmployeeDetailsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/EmployeeDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeDetails>>> GetEmployee()
        {
            return await _context.Employee.ToListAsync();
        }

        // GET: api/EmployeeDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeeDetails>> GetEmployeeDetails(int id)
        {
            var employeeDetails = await _context.Employee.FindAsync(id);

            if (employeeDetails == null)
            {
                return NotFound();
            }

            return employeeDetails;
        }
        
        // PUT: api/EmployeeDetails/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployeeDetails(int id, EmployeeDetails employeeDetails)
        {
            if (id != employeeDetails.e_id)
            {
                return BadRequest();
            }

            _context.Entry(employeeDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeDetailsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/EmployeeDetails
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<EmployeeDetails>> PostEmployeeDetails(EmployeeDetails employeeDetails)
        {
            _context.Employee.Add(employeeDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEmployeeDetails), new { id = employeeDetails.e_id }, employeeDetails);
        }

        // DELETE: api/EmployeeDetails/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<EmployeeDetails>> DeleteEmployeeDetails(int id)
        {
            var employeeDetails = await _context.Employee.FindAsync(id);
            if (employeeDetails == null)
            {
                return NotFound();
            }

            _context.Employee.Remove(employeeDetails);
            await _context.SaveChangesAsync();

            return employeeDetails;
        }

        private bool EmployeeDetailsExists(int id)
        {
            return _context.Employee.Any(e => e.e_id == id);
        }
    }
}
