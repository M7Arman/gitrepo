package square_net;

import java.math.BigInteger;

public class FactorialWithCache implements FactorialAlgorithm {
	
	@Override
	public BigInteger factorial(int n){
		BigInteger ret = BigInteger.ONE;
		for(int i=1; i<=n; ++i) ret = ret.multiply(BigInteger.valueOf(i));
		return ret;
	}
}

