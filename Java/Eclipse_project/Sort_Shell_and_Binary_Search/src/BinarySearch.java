public class BinarySearch {
              // sN - searchNumber

    public int search(int[] theArray, int sN) {
        int endPoint = (theArray.length-1);
        int beginPoint = 0;
        int mid = 0;
        while (endPoint >= beginPoint){
            mid = (endPoint + beginPoint) / 2;
            if (sN > theArray[mid])
                beginPoint = mid+1;
            else {
                if (sN < theArray[mid])
                    endPoint = mid-1;
                else
                    return mid;
            }
        }
        return -1;
    }
    
    public int search(int[] theArray, int sN, int beginPoint, int endPoint) {
        if (beginPoint > endPoint)
            return -1;
        int  mid = (beginPoint + endPoint)/2;

        if (sN > theArray[mid])
        return search(theArray, sN, (mid + 1), endPoint);
        else
            if (sN < theArray[mid])
                return search(theArray, sN, beginPoint, (mid - 1));
            else
                return mid;
    }

}
