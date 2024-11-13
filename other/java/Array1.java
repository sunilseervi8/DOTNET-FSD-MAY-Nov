import java.lang.*;
import java.util.*;

class TestClass {
    public static void calculationSum(int a[],int n){
        int sum=0;//to calculate the sum non overlapping 
        int temp=0;
       for(int i=0;i<n-1;i++){
          sum+=Math.abs(a[i]-a[i+1]); 
       }
       temp=Math.abs(a[0]-a[n-1]);
       temp+=sum;
       System.out.println(temp);
    }
    public static void main(String args[] ) throws Exception {
      Scanner sc =new Scanner(System.in);
      int n=sc.nextInt();//length of array
      int k =sc.nextInt();//key length
      int arr[]=new int[n];

      for(int i=0;i<n-1;i++){
        arr[i]=sc.nextInt();
      }
      calculationSum(arr,k);



    }
}
