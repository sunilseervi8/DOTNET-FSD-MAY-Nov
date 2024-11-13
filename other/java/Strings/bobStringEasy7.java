import java.util.*;

class TestClass {
    public static void main(String args[]) throws Exception {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        sc.nextLine();
        while (t-- > 0) {
            String S = sc.next();
            String T = sc.next();

            int[] hashS = new int[256];
            int[] hashT = new int[256];
            
            for (int i = 0; i < S.length(); i++) {
                hashS[S.charAt(i)]++;
            }

            for (int i = 0; i < T.length(); i++) {
                hashT[T.charAt(i)]++;
            }

            int count = 0;
            for (int i = 0; i < 256; i++) {
                count += Math.abs(hashT[i] - hashS[i]);
            }

            System.out.println(count);
        }

        sc.close();
    }
}