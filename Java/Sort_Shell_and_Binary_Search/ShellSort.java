public class ShellSort {
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
                    a[j-step] = a[j-step] + a[j];
                    a[j] = a[j-step] - a[j];
                    a[j-step] = a[j-step] - a[j];
                    j = j-step;
                } else break;
            }
        }
    }
    for (i=0; i<a.length; i++ ){
        System.out.println("theArray [" + i + "] = " + a[i]);
    }
}
}
