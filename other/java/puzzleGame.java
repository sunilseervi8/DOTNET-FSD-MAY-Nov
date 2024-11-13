import java.util.*;
import java.lang.*;
import java.math.*;

class sol{
     private static final int M =(int)Math.pow(10,9)+7;
    public static void main(String args[]){
       Scanner sc=new Scanner(System.in);
       int test=sc.nextInt();
       while(test-- >0){
         int row=sc.nextInt();
         int col=sc.nextInt();
         char arr[][]=new char[row][col];
         for(int i=0;i<row;i++){
            for(int j=0;j<col;j++){
                arr[i][j]=sc.next().charAt(0);
            }
         }

         int noRows=sc.nextInt();
         int rowArr[]=new int[noRows];
         for(int i=0;i<noRows;i++){
              rowArr[i]=sc.nextInt();
         }

         long resultCount=1;
         for(int i:rowArr){
             Set<Character> hm=new HashSet<>();
             int newIndexRow=i-1;
             for(int j=0;j<col;j++){
                hm.add(arr[newIndexRow][j]);
             }
              resultCount=(resultCount*hm.size())%M;
         }
         System.out.println(resultCount);
       }
    }
}