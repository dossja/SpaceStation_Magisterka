using System;
using System.Collections.Generic;
using System.Text;

namespace ORM.Models.ViewModel
{
    class UsersViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public bool Manager { get; set; }
        public string PositionTypeName { get; set; }
    }
}
