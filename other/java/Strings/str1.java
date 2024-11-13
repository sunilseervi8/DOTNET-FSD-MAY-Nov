package Strings;

import java.util.Scanner;

class TestClass {
public static void main(String args[] ) throws Exception {
        Scanner t=new Scanner(System.in);
        int ab=t.nextInt();
        while(ab-- >0) {
        String a=t.next();
        String b=t.next();  
         if(a.equals(b)||   (a.equals("2")&& b.equals("4")) ||
        ( a.equals("4") && b.equals("2"))){

         System.out.println("YES");
            }
        else {
            System.out.println("NO");
        }

        }
}

}