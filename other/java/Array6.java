import java.io.*;
import java.util.*;

public class Array6 {
    static class Pair implements Comparable<Pair> {
        long sum, base;
        Pair(long sum, long base) {
            this.sum = sum;
            this.base = base;
        }
        // Compare method to implement Comparable interface
        public int compareTo(Pair val) {
            long thisValue = this.base + this.sum;
            long valValue = val.base + val.sum;

            if (thisValue == valValue) {
                return Long.compare(this.base, val.base);
            }
            return Long.compare(thisValue, valValue);
        }

        // Override compareTo method for Comparable interface
       
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int testCases = scanner.nextInt();

        for (int t = 0; t < testCases; t++) {       
            int n = scanner.nextInt();
            int k = scanner.nextInt();
            PriorityQueue<Pair> pq = new PriorityQueue<>();

            for (int i = 0; i < n; i++) {
                long x = scanner.nextLong();
                pq.add(new Pair(x, x));
            }
            for (int i = 0; i < k; i++) {
                Pair pair = pq.poll();
                pq.add(new Pair(pair.sum + pair.base, pair.base));
            }
            long max = 0;
            while (!pq.isEmpty()) {
                Pair pair=pq.poll();
                max = Math.max(max, pair.sum);
            }
            System.out.println(max);
        }
        scanner.close();
    }
}
