import java.util.*;

class awesomeArray {
    public static void main(String args[]) throws Exception {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int k = sc.nextInt();

        int arr[] = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        for (int i = 0; i < n ; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                int moda = arr[j] % k;
                int modb = arr[j + 1] % k;
                if (moda > modb) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        for (int x : arr) {
            System.out.print(x + " ");
        }

    }
}
