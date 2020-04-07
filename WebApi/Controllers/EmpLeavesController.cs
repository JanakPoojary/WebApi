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
    public class EmpLeavesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EmpLeavesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/EmpLeaves
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DisplayModel>>> GetEmpLeaves()
        {
                var result = (from a in _context.EmpLeaves
                              select new DisplayModel
                              {
                                  elid=a.el_id,
                                  emp_id = a.empId, 
                                  emp_name = a.Employee.e_name,
                                  start = a.el_start,
                                  end = a.el_end,
                                  leave_total=a.Leave.no_of_days,   
                                  leave_left = 0,
                                  leave_id=a.Leave.l_id,
                                  leave_name = a.Leave.l_name,
                                  leave_day = 0,
                                  status = a.e_status
                              });
                return await result.ToListAsync();
        }

        // GET: api/EmpLeaves/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmpLeave>> GetEmpLeave(int id)
        {
            var empLeave = await _context.EmpLeaves.FindAsync(id);

            if (empLeave == null)
            {
                return NotFound();
            }

            return empLeave;
        }

        // PUT: api/EmpLeaves/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmpLeave(int id, EmpLeave empLeave)
        {
            if (id != empLeave.el_id)
            {
                return BadRequest();
            }

            _context.Entry(empLeave).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmpLeaveExists(id))
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
       
        // POST: api/EmpLeaves
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<EmpLeave>> PostEmpLeave(EmpLeave empLeave)
        {
            _context.EmpLeaves.Add(empLeave);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEmpLeave), new { id = empLeave.el_id }, empLeave);
        }

        // DELETE: api/EmpLeaves/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<EmpLeave>> DeleteEmpLeave(int id)
        {
            var empLeave = await _context.EmpLeaves.FindAsync(id);
            if (empLeave == null)
            {
                return NotFound();
            }

            _context.EmpLeaves.Remove(empLeave);
            await _context.SaveChangesAsync();

            return empLeave;
        }

        private bool EmpLeaveExists(int id)
        {
            return _context.EmpLeaves.Any(e => e.el_id == id);
        }
    }
}
