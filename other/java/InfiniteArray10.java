import java.io.*;
import java.util.*;

public class InfiniteArray10 {
    private static final int M = 1000000007;

    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {

            int n = sc.nextInt();
            long[] arr = new long[n];
            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextLong();
            }

            int q = sc.nextInt();
            long[] L = new long[q];
            for (int i = 0; i < q; i++) {
                L[i] = sc.nextLong();
            }

            long[] R = new long[q];
            for (int i = 0; i < q; i++) {
                R[i] = sc.nextLong();
            }
            long[] result = new long[q];

            long sum[] = new long[n + 1];
            sum[0] = 0;
            for (int i = 1; i <= n; i++) {
                sum[i] = (sum[i - 1] + arr[i - 1]) % M;
            }
            for (int i = 0; i < q; i++) {
                long left = L[i];
                long right = R[i];
                result[i] = (func(sum, right, n) - func(sum, left - 1, n) + M) % M;
            }
            for (long x : result) {
                System.out.print(x + " ");
            }
            System.out.println("");

        }
        System.out.println("");
    }

    private static long func(long[] sum, long X, int N) {
        return (sum[(int) (X % N)] + (((X / N) % M) * sum[N]) % M) % M;
    }
}