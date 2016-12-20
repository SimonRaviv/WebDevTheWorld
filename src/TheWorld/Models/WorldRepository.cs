using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace TheWorld.Models
{
	public class WorldRepository : IWorldRepository
	{
		private WorldContext _context;
		private ILogger<WorldRepository> _logger;

		public WorldRepository(WorldContext context, ILogger<WorldRepository> logger)
		{
			_context = context;
			_logger = logger;
		}

		public IEnumerable<Trip> GetAllTrips()
		{
			_logger.LogInformation("Getting all trips from the DataBase");
			return _context.Trips.ToList();
		}
	}
}
