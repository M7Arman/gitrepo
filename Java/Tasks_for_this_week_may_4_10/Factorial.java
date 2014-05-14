import java.math.BigInteger;

public class Factorial {

    public BigInteger factorial(int n){
        BigInteger p = BigInteger.ONE;
       
       for(int i=1; i<=n; ++i) 
            p = p.multiply(BigInteger.valueOf(i));
        return p;
    }
}
