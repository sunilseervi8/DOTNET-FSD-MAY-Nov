import java.util.*;

public class countPairs {
    public static long findCountPairs(long[] ar, long k, long p) {

        HashMap<Long, Long> hm = new HashMap<>();
        for (long i : ar) {
            hm.put(i, hm.getOrDefault(i, 0l) + 1);  
        }
        HashMap<Long, Long> mmp = new HashMap<>();
        long ans = 0;
        long num = 0;
        for (long i : hm.keySet()) {

            if ((3 * i % p) * i % p == k) {
                num = hm.get(i);
                ans += num * (num - 1) / 2;
            }
            num = (i * i % p) * i % p - k * i% p;
            num = (num % p + p) % p;

            if (mmp.containsKey(num)) {
                ans += hm.get(i) * mmp.get(num);
                mmp.put(num, hm.get(i) + mmp.get(num));
            } else {
                mmp.put(num, hm.get(i));
            }
        }
        return ans;

    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long t = sc.nextLong(); // Number of test cases

        while (t-- > 0) {

            int n = sc.nextInt();
            long k = sc.nextLong();
            long p = sc.nextLong();

            long[] ar = new long[n];

            for (int i = 0; i < n; i++) {
                ar[i] = sc.nextLong();
                ar[i] = ar[i] % p;
            }

            long ans = findCountPairs(ar, k, p);
            System.out.println(ans);

        }
    }    

    
}
