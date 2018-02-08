using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace App3.Models
{
    public class Item
    {
        public int ID { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public string Color { get; set; }
        public decimal Price { get; set; }
        public int Availability { get; set; }

        public string Image { get; set; }

        public string FullPath()
        {
            return "/Images/" + Image;
        }

    }
}