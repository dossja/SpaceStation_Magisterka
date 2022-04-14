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
    public class MissionsController : ControllerBase
    {
        private readonly SpaceStationContext _context;

        public MissionsController(SpaceStationContext context)
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


        // GET: api/Missions/1/crew
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

        // POST: api/Missions/add
        [Route("add")]
        [HttpPost]
        public async Task<ActionResult<Missions>> PostMissions()
        {
            var missions = await _context.Missions
                .Include(m => m.Crew)
                .ThenInclude(m => m.User)
                .ToListAsync();

            var mission = new Missions();
            if (missions.Count() > 0)
                mission.StartDate = missions[missions.Count() - 1].EndDate;
            else
                mission.StartDate = DateTime.Now;

            mission.EndDate = mission.StartDate.AddDays(56);

            _context.Missions.Add(mission);
            await _context.SaveChangesAsync();

            return CreatedAtAction("PostMissions", new { id = mission.Id }, mission);
        }
    }
}
