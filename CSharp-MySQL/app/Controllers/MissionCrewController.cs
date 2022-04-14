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
    public class MissionCrewController : ControllerBase
    {
        private readonly SpaceStationContext _context;

        public MissionCrewController(SpaceStationContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<MissionCrew>>> GetMissionCrew()
        {
            var missionCrew = await _context.MissionCrew.ToListAsync();

            return missionCrew;
        }

        // GET api/MissionCrew/mission/5
        [HttpGet("mission/{id}")]
        public async Task<ActionResult<IEnumerable<MissionCrew>>> GetMissionCrewMission(int id)
        {
            var missionCrews = await _context.MissionCrew
                .Where(mc => mc.MissionId == id)
                .Include(mc => mc.Mission)
                .Include(mc => mc.User)
                .ToListAsync();


            if (missionCrews == null)
                return NotFound();

            return missionCrews;
        }

        // GET api/MissionCrew/user/5
        [HttpGet("user/{id}")]
        public async Task<ActionResult<IEnumerable<MissionCrew>>> GetMissionsCrewUser(int id)
        {
            var missionCrews = await _context.MissionCrew
                .Where(mc => mc.UserId == id)
                .Include(mc => mc.Mission)
/*                .Include(mc => mc.User)
                .ThenInclude(u => u.PositionType)*/
                .ToListAsync();


            if (missionCrews == null)
                return NotFound();

            return missionCrews;
        }


        // POST: api/MissionCrew
        [Route("add")]
        [HttpPost]
        public async Task<ActionResult<MissionCrew>> PostMissionCrew(MissionCrew missionCrew)
        {
            _context.MissionCrew.Add(missionCrew);
            await _context.SaveChangesAsync();

            return CreatedAtAction("PostMissionCrew", new { MissionId = missionCrew.MissionId, UserId = missionCrew.UserId }, missionCrew);
        }
    }
}
