
 
using System;
class Program {
  private String username;
  private String mailId;
  private String password;

    public Program()
    {
    }

    public Program(string username,string mailId,string password)
    {
        this.username = username;
        this.mailId = mailId;
        this.password = password;
    }

    public string Username
    {
        get { return username; }   // Getter
        set { username =value; }  // Setter
    }
  public string MailId
  {
      get { return mailId; }   // Getter
      set { mailId = value; }  // Setter
  }
  public string Password
  {
      get { return password; }   // Getter
      set { password = value; }  // Setter
  }
  // public string Username1 { get => username; set => username = value; }
  // public string MailId { get => mailId; set => mailId = value; }
  // public string Password { get => password; set => password = value; }

  public override bool Equals(object obj)
  {
      if (obj == null) return false;
      else
      {
          Program other = obj as Program;
          if ((this.Username.Equals(other.Username)) 
              && this.Password.Equals(other.Password))
          {
              return true;
          }
          else
          {
              return false;
          }
      }
      
  }

  public override int GetHashCode()
  {
      return base.GetHashCode();
  }

  public override string ToString()
  {
    return string.Format($"UserName:{Username}\nMailId:{MailId}\n" +
     $"Password:{Password}"); 
      
  }
    


 public static void Main (string[] args) {
    Program p1;
    Program p2;
    string personaldetails;
    string[] details;
    Console.WriteLine("Enter User 1 Details Username,MailId,Password");
    personaldetails = Console.ReadLine();
    details = personaldetails.Split(",");
    p1 = new Program(details[0], details[1], details[2]);
    
    Console.WriteLine("Enter User 2 Details Username,MailId,Password");
    personaldetails = Console.ReadLine();
    details = personaldetails.Split(",");
    p2 = new Program(details[0], details[1], details[2]);
    Console.WriteLine();
    Console.WriteLine("User 1");
    Console.WriteLine(p1);
    Console.WriteLine();
    Console.WriteLine("User 2");
    Console.WriteLine(p2);
    
    if(p1.Equals(p2)){
      Console.WriteLine("User 1 is same as User 2");
    }
    else{
      Console.WriteLine("User 1 is not same as User 2");
    }
  }
    
}
