
public class BinarySearch {

    public int search(int[] theArray, int sN) {
        int endPoint = (theArray.length-1);
        int beginPoint = 0;
        int mid;

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
    
}
