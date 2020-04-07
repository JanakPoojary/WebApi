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
    public class LeaveDetailsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public LeaveDetailsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/LeaveDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LeaveDetails>>> GetLeave()
        {
            return await _context.Leave.ToListAsync();
        }

        // GET: api/LeaveDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LeaveDetails>> GetLeaveDetails(int id)
        {
            var leaveDetails = await _context.Leave.FindAsync(id);

            if (leaveDetails == null)
            {
                return NotFound();
            }

            return leaveDetails;
        }

        // PUT: api/LeaveDetails/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLeaveDetails(int id, LeaveDetails leaveDetails)
        {
            if (id != leaveDetails.l_id)
            {
                return BadRequest();
            }

            _context.Entry(leaveDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LeaveDetailsExists(id))
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

        // POST: api/LeaveDetails
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<LeaveDetails>> PostLeaveDetails(LeaveDetails leaveDetails)
        {
            _context.Leave.Add(leaveDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetLeaveDetails), new { id = leaveDetails.l_id }, leaveDetails);
        }

        // DELETE: api/LeaveDetails/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<LeaveDetails>> DeleteLeaveDetails(int id)
        {
            var leaveDetails = await _context.Leave.FindAsync(id);
            if (leaveDetails == null)
            {
                return NotFound();
            }

            _context.Leave.Remove(leaveDetails);
            await _context.SaveChangesAsync();

            return leaveDetails;
        }

        private bool LeaveDetailsExists(int id)
        {
            return _context.Leave.Any(e => e.l_id == id);
        }
    }
}
