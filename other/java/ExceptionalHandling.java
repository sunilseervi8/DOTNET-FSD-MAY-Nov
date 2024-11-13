import java.util.Scanner;
import java.math.*;
public class ExceptionalHandling {
    public static void main(String[] args)throws Exception {
        Scanner in=new Scanner(System.in);
        while (in .hasNextInt()) {
            int n = in .nextInt();
            int p = in .nextInt();
            
            try {
                if(n==0 && p==0){
                    throw new Exception("n and p should not be zero.");}
                else if (n<0 || p<0){
                    throw new Exception("n or p should not be negative.");
                }
                System.out.println                               
                
                ((long)Math.pow(n,p));
                
            } catch (Exception e) {
                System.out.println(e);
            }
        }
    }
}