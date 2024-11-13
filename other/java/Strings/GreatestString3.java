package Strings;

import java.util.Scanner;

public class GreatestString3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        sc.nextLine(); // Consume the newline after reading T

        while (T-- > 0) {
            String S = sc.nextLine();
            int q = sc.nextInt();
            
            if (sc.hasNextLine()) {
                sc.nextLine(); // Consume the newline after reading q
            }

            StringBuilder result = new StringBuilder(S);
            int operations = 0;

            for (int i = 0; i < result.length(); i++) {
                char ch = result.charAt(i);
                if (operations < q) {
                    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                        result.setCharAt(i, (char) (ch + 1));
                        operations++;
                    }
                } else {
                    break;
                }
            }

            System.out.println(result.toString());
        }

        sc.close();
    }
}
