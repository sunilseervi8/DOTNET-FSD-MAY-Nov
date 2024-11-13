import java.util.Scanner;

public class toString6 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        sc.nextLine();

        while (T-- > 0) {
            String s1 = sc.next();
            String s2 = sc.next();
            boolean flag = true;

            if (s1.length() != s2.length()) {
                flag = false;
            } else {
                
                    int[] count = new int[26];
                    for (char c : s1.toCharArray())
                        count[c - 'a']++;

                    for (char c : s2.toCharArray()) 
                        count[c - 'a']--;

                    for (int i = 0; i < 26; i++) {
                        if (count[i] != 0) {
                            flag = false;
                            break; 
                        }
                    }
              }

            if (flag) 
                System.out.println("YES");
            else 
                System.out.println("NO");
        }

    }
}
