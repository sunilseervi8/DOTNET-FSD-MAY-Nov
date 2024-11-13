import java.util.*;
 
class TestClass {
    public static void main(String args[] ) throws Exception {
       Scanner sc=new Scanner(System.in);
       long n=sc.nextLong();
       long arr[]=new long[(int)n];
       for(long i=0;i<n;i++){
        arr[(int)i]=sc.nextLong();
       }
 
       long sum, index,count=0;
       for(long i=1;i<n;i++){
        for(long j=i+1;j<=n;j++){
          sum=(long)Math.abs(arr[(int)j-1]-arr[(int)i-1]);
          index=(i*i)+(j*j);
          //?System.out.println(i+"sum "+sum+"index "+index);
          if(sum==index){
            count++;
          }
        }
       }
       System.out.println(count);
 
 
    }
}