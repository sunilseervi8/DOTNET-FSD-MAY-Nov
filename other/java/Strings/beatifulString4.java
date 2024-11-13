package Strings;
import java.util.HashMap;
import java.util.Scanner;

public class beatifulString4 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        sc.nextLine(); 
        while (T-- > 0) {
            String s = sc.nextLine();
            int count = 0;
            HashMap<String, Integer> diffMap = new HashMap<>();
            int aCount = 0, bCount = 0, cCount = 0;
            diffMap.put("0,0", 1);
            for (char ch : s.toCharArray()) {
                if (ch == 'a') aCount++;
                if (ch == 'b') bCount++;
                if (ch == 'c') cCount++;
                int diffAB = aCount - bCount;
                int diffBC = bCount - cCount;
                String diffString = diffAB + "," + diffBC;
                count += diffMap.getOrDefault(diffString, 0);
                diffMap.put(diffString, diffMap.getOrDefault(diffString, 0) + 1);
               
            }
             System.out.println(count);
        }
    }
}



