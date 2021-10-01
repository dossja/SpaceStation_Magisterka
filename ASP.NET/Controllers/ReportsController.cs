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
    public class ReportsController : ControllerBase
    {
        private readonly SpaceStationContext _context;

        public ReportsController(SpaceStationContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Reports>>> GetReports()
        {
            var reports = await _context.Reports.ToListAsync();

            for (int i = 0; i < reports.Count; i++)
            {
                ReportType reportType= await _context.Report_Type.FindAsync(reports[i].ReportTypeId);
                reports[i].ReportType = reportType;
                ReportStatus reportStatus = await _context.Report_Status.FindAsync(reports[i].ReportStatusId);
                reports[i].ReportStatus = reportStatus;
                Users reportingUser = await _context.Users.FindAsync(reports[i].ReportingUserId);
                reports[i].ReportingUser = reportingUser;

                var incidents = await _context.Incidents.ToListAsync();

                foreach (var incident in incidents)
                {
                    if (incident.ReportId == reports[i].Id)
                        reports[i].OperatingUserId.Add(incident);
                }
/*
                var operatingUser = reports[i].OperatingUserId.Select(op => op.OperatingUserId);
                Console.Write(operatingUser);*/
            }

            return reports;
        }

        // GET: api/Users/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Reports>> GetReports(int id)
        {
            var reports = await _context.Reports.FindAsync(id);

            if (reports == null)
            {
                return NotFound();
            }

            ReportType reportType = await _context.Report_Type.FindAsync(reports.ReportTypeId);
            reports.ReportType = reportType;
            ReportStatus reportStatus = await _context.Report_Status.FindAsync(reports.ReportStatusId);
            reports.ReportStatus = reportStatus;
            Users reportingUser = await _context.Users.FindAsync(reports.ReportingUserId);
            reports.ReportingUser = reportingUser;

            return reports;
        }

        // POST: api/Users
        [Route("add")]
        [HttpPost]
        public async Task<ActionResult<Reports>> PostReports(Reports reports)
        {
            reports.ReportStatusId = 1;
            _context.Reports.Add(reports);
            await _context.SaveChangesAsync();

            return CreatedAtAction("PostReports", new { id = reports.Id }, reports);
        }

        [HttpPut("update/{id}")]
        public async Task<ActionResult<Reports>> PutReports(int id, Reports reports)
        {
            if (id != reports.Id)
            {
                return BadRequest();
            }

            _context.Entry(reports).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }

            catch (DbUpdateConcurrencyException)
            {
                if (!ReportExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return reports;
        }


        private bool ReportExists(int id)
        {
            return _context.Reports.Any(e => e.Id == id);
        }
    }
}
