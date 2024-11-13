using system;
 namespace hello
{
    class helloWord{
        public void add(int x, int y){
            Console.WriteLine("Hello from addd");
        }
         public delegate int MyDelegate(int a, int b);

        public static void maon(String args[]){
        Console.WriteLine("hello world");
        helloWord hl=new helloWord();
        MyDelegate del=new MyDelegate();
        del+=hl.add(1,3);
        Console.WriteLine(hl.add);

    }

    }
}