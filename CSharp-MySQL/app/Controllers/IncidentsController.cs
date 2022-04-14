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
    public class IncidentsController : ControllerBase
    {
        private readonly SpaceStationContext _context;

        public IncidentsController(SpaceStationContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Incidents>>> GetIncidents()
        {
            var incidents = await _context.Incidents.ToListAsync();

            return incidents;
        }

        // GET api/IncidentsController/report/5
        [HttpGet("report/{id}")]
        public async Task<ActionResult<IEnumerable<Incidents>>> GetIncidents(int id)
        {
            var incidents = await _context.Incidents
                .Where(i => i.ReportId == id)
                .ToListAsync();


            if (incidents == null)
                return NotFound();

            return incidents;
        }


        // POST: api/IncidentsController/add
        [Route("add")]
        [HttpPost]
        public async Task<ActionResult<Incidents>> PostIncidents(Incidents incidents)
        {
            _context.Incidents.Add(incidents);
            await _context.SaveChangesAsync();

            return CreatedAtAction("PostIncidents", new { ReportId = incidents.ReportId, UserId = incidents.UserId }, incidents);
        }
    }
}
