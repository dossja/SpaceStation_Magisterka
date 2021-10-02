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
    public class PositionTypeController : ControllerBase
    {
        private readonly SpaceStationContext _context;

        public PositionTypeController(SpaceStationContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PositionType>>> GetPositionType()
        {
            var positionType = await _context.Position_Type.ToListAsync();

            return positionType;
        }
    }
}
