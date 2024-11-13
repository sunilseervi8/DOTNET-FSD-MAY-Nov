using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UserDetailsS1
{
    internal class User
    {
        public User() { }
        public User(string userName, string password, string email)
        {
            UserName = userName;
            Password = password;
            Email = email;
        }

        public string UserName {  get; set; }
        public string Password { get; set; }
        public string Email { get; set; }

        public override bool Equals(object? obj)
        {
            if(obj==null) return false;
            User other = obj as User;
            if (this.UserName.Equals(other.UserName) && this.Password.Equals(other.Password))
            {
                return true;
            }
            else { return false; }

        }
        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
        public override string ToString()
        {
            return base.ToString();
        }
    }
}


    User [] user=new User[2];
   
    for (int i = 0; i < 2; i++) {
        Console.WriteLine($"Enter the user {i+1} details");
        string userDetails = Console.ReadLine();
        string [] details = userDetails.Split(",");
        user[i] = new User(details[0], details[1], details[2]);

    }
    Console.WriteLine("User 1 ");
    Console.WriteLine(user[0]);
    Console.WriteLine("User 2");
    Console.WriteLine(user[1]);

    if (user[0].Equals(user[1]))
    {
        Console.WriteLine("user 1 and user 2 are same");
    }
    else
    {
        Console.WriteLine("User 1 and user 2 are not same ");
    }
    

}