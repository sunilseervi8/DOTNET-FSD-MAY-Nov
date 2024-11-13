import java.util.*;

public class KaranAndEven1 {
    public static void main(String args[] ) throws Exception {
        Scanner sc=new Scanner(System.in);
        String num=sc.nextLine();
        String [] str=num.split(" ");
        for(String st:str){
            long i=Long.parseLong(st);
           if(i==-1){
            break;
           }
           if(i%2==0){
            System.out.println(i);
           }
        }
    }
}
