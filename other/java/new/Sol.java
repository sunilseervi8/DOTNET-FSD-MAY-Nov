import java.util.Scanner;

public class Sol {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        sc.nextLine();
        
        while (t-- > 0) {
            String s1 = sc.next();
            String s2 = sc.next();
            int difference = calculateDifferences(s1, s2);
            System.out.println(difference);
        }

        sc.close();
    }

    private static int calculateDifferences(String s1, String s2) {
        int[] arr = new int[256];
        int[] arr1 = new int[256];

        for (char x : s1.toCharArray()) {
            arr[x]++;
        }
        for (char x : s2.toCharArray()) {
            arr1[x]++;
        }

        return calculateTotalDifferences(arr, arr1);
    }

    private static int calculateTotalDifferences(int[] arr, int[] arr1) {
        int count = 0;
        for (int i = 0; i < 256; i++) {
            count += Math.abs(arr[i] - arr1[i]);
        }
        return count;
    }
}
