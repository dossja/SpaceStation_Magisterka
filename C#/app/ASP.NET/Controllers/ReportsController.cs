using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ORM.DataAccess;
using ORM.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ASP.NET.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ReportsController : ControllerBase
    {
        private readonly SpaceStationContext _context;

        public ReportsController(SpaceStationContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Reports>>> GetReports()
        {
            var reports = await _context.Reports
                .Include(r => r.ReportStatus)
                .Include(r => r.ReportType)
                .Include(r => r.ReportingUser)
                .Include(r => r.Incidents)
                .ThenInclude(i => i.User)
                .ToListAsync();

            return reports;
        }

        // GET: api/Users/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Reports>> GetReports(int id)
        {
            var reports = await _context.Reports
                .AsNoTracking()
                .Include(r => r.ReportStatus)
                .Include(r => r.ReportType)
                .Include(r => r.ReportingUser)
                .Include(r => r.Incidents)
                .ThenInclude(i => i.User)
                .FirstOrDefaultAsync(m => m.Id == id);

            if (reports == null)
            {
                return NotFound();
            }

            return reports;
        }

        // POST: api/Users
        [Route("add")]
        [HttpPost]
        public async Task<ActionResult<Reports>> PostReports(Reports reports)
        {
            reports.ReportStatusId = 1;
            _context.Reports.Add(reports);
            await _context.SaveChangesAsync();

            return CreatedAtAction("PostReports", new { id = reports.Id }, reports);
        }

        [HttpPut("update/{id}")]
        public async Task<ActionResult<Reports>> PutReports(int id, Reports reports)
        {
            if (id != reports.Id)
            {
                return BadRequest();
            }

            _context.Entry(reports).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }

            catch (DbUpdateConcurrencyException)
            {
                if (!ReportExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return reports;
        }


        private bool ReportExists(int id)
        {
            return _context.Reports.Any(e => e.Id == id);
        }
    }
}
