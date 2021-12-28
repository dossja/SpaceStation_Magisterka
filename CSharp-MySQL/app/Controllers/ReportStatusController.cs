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
    public class ReportStatusController : ControllerBase
    {
        private readonly SpaceStationContext _context;

        public ReportStatusController(SpaceStationContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ReportStatus>>> GetReportStatus()
        {
            var reportStatuses = await _context.Report_Status.ToListAsync();

            return reportStatuses;
        }
    }
}
