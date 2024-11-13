package Strings;

import java.util.*;

public class str2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int t = sc.nextInt();
        sc.nextLine();
        
       while(t-->0){
            int N = sc.nextInt();
            int K = sc.nextInt();
            sc.nextLine();
            String S = sc.nextLine();
            
            int count = 1;
            for (int i = 0; i < N; i++) {
                int a = S.charAt(i) - S.charAt(i % count);
                if (a > 0) break;
                if (a < 0) count = i + 1;
            }
            StringBuilder build = new StringBuilder(S.substring(0, count));
            while (build.length() < N + K){
                build.append(build);
        }
            String res= build.substring(0, N + K);
            System.out.println(res);
        }
        
        sc.close();
    }
}