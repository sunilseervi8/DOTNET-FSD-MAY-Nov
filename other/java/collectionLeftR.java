import java.util.*;
class TestClass {
    public static void main(String args[] ) throws Exception {
        Scanner s=new Scanner(System.in);
        int N=s.nextInt();
        int Q=s.nextInt();
        int arr[]=new int[N];
        for(int i=0;i<N;i++){
            arr[i]=s.nextInt();
        }
        while(Q-->0){
            int Y=s.nextInt();  //from
            int Z=s.nextInt();  //to
            char D=s.nextLine().trim().charAt(0);
           
            boolean flag=false;
            //check if destination is present
            for(int i=0;i<N;i++){
                if(arr[i] == Z){
                    flag=true; //destination is present
                    break;
                }
            }
            int count=0;
            if(flag){
                if(D == 'L'){
                    while(arr[Y]!=Z){
                        count++;
                        Y = (Y-1+N)%N;
                    }
                }
                else{
                    while(arr[Y]!=Z){
                        count++;
                        Y=(Y+1)%N;
                    }
                }
                System.out.println(count);
            }
            else{
                System.out.println("-1");
            }
        }
    }
}