import java.io.*;
import java.util.*;
 
public class primeChecker {
   public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        ArrayList<Integer> list = new ArrayList<>();
        int count = 0;

        while (sc.hasNext()){
            int n = sc.nextInt();
            boolean flag=true;

            if (n<=1){
                flag= false;
            } 
            else{
                for (int i = 2; i <= n/2; i++) {
                    if (n%i == 0) {
                    flag= false;
                    } 
                } 
                if(flag) list.add(n);
            } 
            if (++count==4){continue;}
            for (int i : list) {
                System.out.print(i + " ");
            }
            System.out.println();
        }
   }
}

    
