import java.util.Scanner;

public class arrayAndSum {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();

        while (t-- > 0) {
            int n = sc.nextInt();
            int[] ar = new int[n];
            for (int i = 0; i < ar.length; i++) {
                ar[i] = sc.nextInt();
            }

            for (int i = 0; i < n; i++) {
                int target = ar[i];
                boolean[] dp = new boolean[target + 1];
                dp[0] = true;

                for (int j = 0; j < n; j++) {
                    if (j == i) continue;
                    for (int k = target; k >= ar[j]; k--) {
                        dp[k] = dp[k] || dp[k - ar[j]];
                    }
                }

                if (dp[target]) {
                    System.out.print("1 ");
                } else {
                    System.out.print("0 ");
                }
            }
            System.out.println();
        }
        sc.close();
    }
}