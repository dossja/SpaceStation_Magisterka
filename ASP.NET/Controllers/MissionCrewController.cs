﻿using Microsoft.AspNetCore.Http;
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

        // GET api/<IncidentsController>/5
        [HttpGet("missions/{id}")]
        public async Task<ActionResult<MissionCrew>> GetMissionCrewMission(int id)
        {
            var missionCrews = await _context.MissionCrew.ToListAsync();
            var missionCrew = new MissionCrew();

            for (int i = 0; i < missionCrews.Count; i++)
            {
                if (missionCrews[i].MissionId == id)
                {
                    missionCrew = missionCrews[i];

                    missionCrew.User.Add(await _context.Users.FindAsync(missionCrew.UserId));
                }
            }

            if (missionCrew == null)
                return NotFound();

            missionCrew.Mission.Add(await _context.Missions.FindAsync(missionCrew.MissionId));

            return missionCrew;
        }

        // GET api/<IncidentsController>/5
        [HttpGet("user/{id}")]
        public async Task<ActionResult<MissionCrew>> GetMissionsCrewUser(int id)
        {
            var missionCrews = await _context.MissionCrew.ToListAsync();
            var missionCrew = new MissionCrew();

            for (int i = 0; i < missionCrews.Count; i++)
            {
                if (missionCrews[i].UserId == id)
                {
                    if(missionCrew.UserId == null)
                        missionCrew = missionCrews[i];

                    missionCrew.Mission.Add(await _context.Missions.FindAsync(missionCrew.MissionId));
                }
            }

            if (missionCrew == null)
                return NotFound();

            missionCrew.User.Add(await _context.Users.FindAsync(missionCrew.UserId));

            return missionCrew;
        }


        // POST: api/Users
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
