using System;

namespace DelegateDemo
{
    public delegate int MyDelegate(int a, int b);//this can acess both the method like add subs mentioned 

    class Program
    {
        public static int Add(int a, int b)
        {
            return a + b;
        }
        public static int Subtract(int a, int b)
        {
            return a - b;
        }
        public static void Main(string[] args)
        {
            // Create a delegate instance and assign the Add method
            MyDelegate myDelegate = Add;
            // Call the delegate
            int result = myDelegate(10, 5);
            Console.WriteLine("Add result: " + result);
            Console.WriteLine("add method "+myDelegate(2,4));

            myDelegate = Subtract;
            result = myDelegate(10, 5);
            Console.WriteLine("Subtract result: " + result); 
            Console.WriteLine("sub method "+myDelegate(2,4));
        }
    }
}