
import java.util.*;
import java.security.*;
import java.math.*;

public class MD5 {

   public static String getMd(String str){
       try{
           MessageDigest msd=MessageDigest.getInstance("MD5");
           byte[] messageDigest=msd.digest(str.getBytes());
           BigInteger num=new BigInteger(1,messageDigest);
           String text=num.toString(16);
           while(text.length()>32){
               text="0"+text;
           }   
           return text;        
       }catch(NoSuchAlgorithmException e){
           throw new RuntimeException(e);
       }
       
   }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.next();
        System.out.println(getMd(s));
        
        
    }
}


