
public class BinarySearch {
    private int mid = 0;                                // sN - searchNumber
    private int attempt = 0;
    public int search(int[] theArray, int sN) {
        int endPoint = (theArray.length-1);
        int beginPoint = 0;

        while (endPoint > beginPoint){
            mid = (endPoint + beginPoint)/2;
            if (sN > theArray[mid])
                beginPoint = mid+1;
            else
            if (sN < theArray[mid])
                endPoint = mid-1;
            else
                return mid;
        }
        return -1;
    }
   
    public int search(int[] theArray, int sN, int beginPoint, int endPoint) {
        mid = (beginPoint + endPoint)/2;

        if (sN == theArray[mid])
            return mid;

        if (endPoint > beginPoint)
            return -1;

        if (sN > theArray[mid])
            beginPoint = mid+1;
        else
            endPoint = mid-1;

        attempt = search(theArray, sN, beginPoint, endPoint);
    }
}
