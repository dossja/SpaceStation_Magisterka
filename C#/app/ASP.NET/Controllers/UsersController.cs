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
    public class UsersController : ControllerBase
    {
        private readonly SpaceStationContext _context;

        public UsersController(SpaceStationContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Users>>> GetUsers()
        {
            var users = await _context.Users.ToListAsync();

            for(int i = 0; i < users.Count; i++)
            {
                PositionType positionType = await _context.Position_Type.FindAsync(users[i].PositionTypeId);
                users[i].PositionType = positionType;
            }

            return users;
        }

        // GET: api/Users/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Users>> GetUsers(int id)
        {
            var users = await _context.Users.FindAsync(id);

            if (users == null)
            {
                return NotFound();
            }

            PositionType positionType = await _context.Position_Type.FindAsync(users.PositionTypeId);
            users.PositionType = positionType;

            return users;
        }

        // GET: api/Users/1
        [Route("login")]
        [HttpGet]
        public async Task<ActionResult<Users>> GetUsersByEmail(Users users)
        {
            var user = _context.Users.Where(u => u.Email == users.Email).FirstOrDefault();

            if (user == null)
            {
                return NotFound();
            }

            PositionType positionType = await _context.Position_Type.FindAsync(user.PositionTypeId);
            user.PositionType = positionType;

            return user;
        }

        // POST: api/Users
        [Route("signup")]
        [HttpPost]
        public async Task<ActionResult<Users>> PostUsers(Users users)
        {
            users.Email = users.Name + "." + users.Surname + "@firm.com";
            _context.Users.Add(users);
            await _context.SaveChangesAsync();

            return CreatedAtAction("PostUsers", new { id = users.Id }, users);
        }

        // PUT: api/Products/5
/*        [Route("update")]*/
        [HttpPut("update/{id}")]
        public async Task<ActionResult<Users>> PutUsers(int id, Users users)
        {
            if (id != users.Id)
            {
                return BadRequest();
            }

            _context.Entry(users).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            
            return users;
        }

        // DELETE: api/Products/5
        [HttpDelete("delete/{id}")]
        public async Task<ActionResult<Users>> DeleteUsers(int id)
        {
            var users = await _context.Users.FindAsync(id);
            if (users == null)
            {
                return NotFound();
            }

            _context.Users.Remove(users);
            await _context.SaveChangesAsync();

            return users;
        }


        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }

    }
}
