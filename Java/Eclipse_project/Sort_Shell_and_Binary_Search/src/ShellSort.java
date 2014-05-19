public class ShellSort {
    private int temp;

    public void shell(int[] a) {
        int step = a.length;
        int i = 0;
        int j = 0;
        while (step > 0) {
            step = step/2;
            for (i = step; i<a.length; i++) {
                j=i;
                while ((j-step) >= 0) {
                    if ( a[j] < a[j-step] ){
                        temp = a[j];
                        a[j] = a[j-step];
                        a[j-step] = temp;
                        j = j-step;
                    } else break;
                }
            }
        }
        for (i=0; i<a.length; i++ ){
            printArray(i,a);
        }
     }

     private void printArray(int j, int[] array){
         System.out.println("theArray [" + j + "] = " + array[j]);
     }
}
