import java.util.*;
class TestClass {
    public static void main(String args[] ) throws Exception {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        
        while (T-- > 0) {
            int row = sc.nextInt();
            int col = sc.nextInt();
            
            char arr[][] = new char[row][col];
            
            for (int i = 0; i < row; i++) {
                String R = sc.next();
                for (int j = 0; j < col; j++) {
                    arr[i][j] = R.charAt(j);
                }
            }
            
            String S = sc.next();
            int count = 0;
            
            for (int i = 0; i < S.length(); i++) {
                for (int j = 0; j < col; j++) {
                    if (S.charAt(i) == arr[i % row][j]) {
                        arr[i % row][j] = '0';
                        count++;
                        break;
                    }
                }
            }
            
            if (count == S.length()) {
                System.out.println("Yes");
            } else {
                System.out.println("No");
            }
        }
    }
}
        