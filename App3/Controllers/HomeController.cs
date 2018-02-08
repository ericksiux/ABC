using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace App3.Controllers
{
    public class HomeController : Controller
    {
        [Authorize(Roles = "Admin,Consulta")]
        public ActionResult Index()
        {
            return View();
        }
    }
}