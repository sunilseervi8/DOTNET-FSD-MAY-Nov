import java.lang.*;
import java.util.*;
class TestClass {
    public static void main(String args[] ) throws Exception {
      Scanner sc=new Scanner(System.in);
      int t=sc.nextInt();
      while(t-->0){
        long m=sc.nextLong();
        long n=sc.nextLong();
        long x=sc.nextLong();
        long y=sc.nextLong();

        long xl=Math.min(x,m-x+1);
        long yl=Math.min(y,n-y+1);
        long res=Math.min(xl,yl);
        if(res<6){
            System.out.println("Mavis");
        }else{
            System.out.println("Shivam");
        }
      }
    }
}
