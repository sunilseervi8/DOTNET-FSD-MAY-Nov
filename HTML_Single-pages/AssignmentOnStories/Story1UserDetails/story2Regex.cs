using System;
using System.Text.RegularExpressions;


class Program {
 public Boolean PasswordValidate(string password){
  
   //[^ \s] \s is a space, ^: acts as a negation operator, 
     string pattern = @"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[^ \s]{7,}$";

     Regex regex = new Regex(pattern);
     return regex.IsMatch(password);
   
 }
    
  
  public static void Main (string[] args) {
    string password;
    Console.WriteLine("Enter your password");
    password = Console.ReadLine();
    Program prog=new Program();
    bool res=prog.PasswordValidate(password);
    if(res){
      Console.WriteLine("Password is valid");
    }
    else{
      Console.WriteLine("Password is invalid");
    }
      
  }
   
}