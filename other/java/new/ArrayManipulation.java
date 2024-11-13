import java.util.*;

public class ArrayManipulation {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int numTestCases = sc.nextInt();
        for (int testCase = 0; testCase < numTestCases; testCase++) {
            int numElements = sc.nextInt();
            int[] arr = readAndSortArray(numElements, sc);
            int[] printResult = arrayManipulation(arr);
            printResultArray(printResult);
        }
        sc.close();
    }
    
    private static int[] readAndSortArray(int numElements, Scanner sc) {
        int[] arr = new int[numElements];
        for (int i = 0; i < numElements; i++) {
            arr[i] = sc.nextInt();
        }
        Arrays.sort(arr);
        return arr;
    }

    private static int[] arrayManipulation(int[] arr) {
        int n = arr.length;
        int firstIndex = 0;
        int lastIndex = n - 1;
        int resultArr[] = new int[n];
        for (int i = 0; i < n; i++) {
            if (i % 2 == 0) 
            resultArr[i] = arr[firstIndex++];
            else 
                resultArr[i] = arr[lastIndex--];
        }
        return resultArr;
    }
    
    private static void printResultArray(int[] res) {
        for (int x : res) {
           System.out.print(x + " ");
          }   
          System.out.println("");
      }
}
