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
    public class ReportTypeController : ControllerBase
    {
        private readonly SpaceStationContext _context;

        public ReportTypeController(SpaceStationContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ReportType>>> GetReportType()
        {
            var reportTypes = await _context.Report_Type.ToListAsync();

            return reportTypes;
        }
    }
}
