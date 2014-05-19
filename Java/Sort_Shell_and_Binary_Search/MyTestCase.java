import junit.*;
import org.junit.*;

public class MyTestCase extends TestCase {
    //TODO: private to protected
    private BinarySearch bs = new BinarySearch();
    private int[] testArray = {1,6,7,9,15,20,31};
    private int testNumber = 9;
    private int testNumberIndex = 3;
    
    @Test
    public void testBinarySearch() {
        assertEquals(testNumberIndex,bs.search(testArray,testNumber));
    }
}
