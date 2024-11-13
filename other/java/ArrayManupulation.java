import java.util.*;

public class ArrayManupulation {
    public static void main(String Args[]) {
        Scanner sc = new Scanner(System.in);
        int test = sc.nextInt();

        for (int t = 0; t < test; t++) {
            int n = sc.nextInt();
            int arr[] = new int[n];

            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }

            Arrays.sort(arr);
            int start = 0;
            int end = n - 1;
            int res[] = new int[n];

            for (int i = 0; i < n; i++) {
                if (i % 2 == 0) {
                    res[i] = arr[start++];
                } else {
                    res[i] = arr[end--];
                }
            }

            for (int i = 0; i < n; i++) {
                System.out.print(res[i] +" ");
            }
            System.out.println("");
            
        }
           
    }
}