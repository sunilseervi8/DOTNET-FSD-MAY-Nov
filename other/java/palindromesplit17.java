import java.util.*;

public class palindromesplit17 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        sc.nextLine(); 
        while (T-- > 0) {
            String s = sc.nextLine();
            int[] freq = new int[26]; 
            for (char ch : s.toCharArray()) {
                freq[ch - 'a']++;
            }
            int count = 0;
            for (int i : freq) {
                count += i / 2;
            }

            System.out.println(count);
        }
        sc.close(); 
    }
}
