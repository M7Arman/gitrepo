
import java.math.BigInteger;

public class Main {
    public static void main(String[] args) {

        int n=20;

        if (args.length >0) {
            try {
                n=Integer.parseInt(args[0]);
            } catch (Exception e) {
                n=20;
            }
        }

        FactorialWithCache fac = new FactorialWithCache();
        BigInteger s;


        s = fac.factorial(2*n).divide( (fac.factorial(n).pow(2) ) );

        System.out.println( n + "x" + n + " for :  " + s );


    }
}
