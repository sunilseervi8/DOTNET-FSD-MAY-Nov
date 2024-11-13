
using System;

class Program {
  int maxVal=100;
  public void hadlingExceptiona(int someval){
   try{
     if(someval>maxVal){
       throw new Exception("Value is greater than max value");
     }
   }catch(Exception ex){
     Console.WriteLine("Custom Message:-"+ex.Message);//describe the exception message
     Console.WriteLine("Inner excreption:-"+ex.InnerException);//
     Console.WriteLine("Source:"+ex.Source);//givethe name of the assemblt that throws excepion
     Console.WriteLine("StackTrace:-"+ex.StackTrace);//location of the exception
     Console.WriteLine("TargetSite:-"+ex.TargetSite.MemberType);//method of exception
     Console.WriteLine("TargetSite:-"+ex.TargetSite.DeclaringType);
     
   }
    
  }
  public static void Main (string[] args) {
    Console.WriteLine ("Enter the value ");
    int someval=Convert.ToInt32(Console.ReadLine());
    Program p=new Program();
    p.hadlingExceptiona(someval);
    
  }
}