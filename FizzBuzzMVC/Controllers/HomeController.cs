using DotNET6_MVC_CodingChallengeTemplate.Models;
using FizzBuzzMVC.Logic;
using FizzBuzzMVC.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace DotNET6_MVC_CodingChallengeTemplate.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult App()
        {
            FizzBuzzModel model = new();

            return View(model);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult App(FizzBuzzModel input)
        {
            input.FBOutput = FizzBuzzGenerator.GetValues(input);

            return View(input.FBOutput);
        }

        public IActionResult Code()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}