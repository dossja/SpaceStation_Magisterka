using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ORM.DataAccess;
using ORM.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ASP.NET.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MissionController : ControllerBase
    {
        private readonly SpaceStationContext _context;

        public MissionController(SpaceStationContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Missions>>> GetMissions()
        {
            var missions = await _context.Missions
                .Include(m => m.Crew)
                .ThenInclude(c => c.User)
                .ToListAsync();

            return missions;
        }

        // GET: api/Users/1
        [HttpGet("{id}/crew")]
        public async Task<ActionResult<IEnumerable<Missions>>> GetMissions(int id)
        {
            var missions = await _context.Missions
                .AsNoTracking()
                .Where(m => m.Id == id)
                .Include(m => m.Crew)
                .ThenInclude(m => m.User)
                .ToListAsync();

            if (missions == null)
            {
                return NotFound();
            }

            return missions;
        }

        // POST: api/Users
        [Route("add")]
        [HttpPost]
        public async Task<ActionResult<Missions>> PostMissions(Missions missions)
        {
            _context.Missions.Add(missions);
            await _context.SaveChangesAsync();

            return CreatedAtAction("PostMisssions", new { id = missions.Id }, missions);
        }
    }
}
