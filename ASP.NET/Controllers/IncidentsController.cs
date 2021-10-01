using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ORM.DataAccess;
using ORM.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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

        // GET: api/Users/1
        [HttpGet("report/{id}")]
        public async Task<ActionResult<Incidents>> GetIncidents(int id)
        {
            var incidents = await _context.Incidents.ToListAsync();
            var incident = new Incidents();

            for (int i = 0; i < incidents.Count; i++)
            {
                if (incidents[i].ReportId == id)
                {
                    incident = incidents[i];
                    break;
                }
            }

            if (incident == null)
                return NotFound();

            return incident;
        }

        // POST: api/Users
        [Route("add")]
        [HttpPost]
        public async Task<ActionResult<Incidents>> PostIncidents(Incidents incidents)
        {
            _context.Incidents.Add(incidents);
            await _context.SaveChangesAsync();

            return CreatedAtAction("PostIncidents", new { ReportId = incidents.ReportId,  OperatingUserId = incidents.OperatingUserId}, incidents);
        }
    }
}
