import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner inp = new Scanner( System.in );
        
              int[] theArray = new int[args.length];
              int searchNumber = 1;
        System.out.print("x = ");
        searchNumber = inp.nextInt();

        for(int i=0; i<theArray.length; i++)
            theArray[i]=Integer.parseInt(args[i]);
        
        ShellSort ss = new ShellSort();
        ss.shell(theArray);

        BinarySearch bs = new BinarySearch();
        int answer = bs.search(theArray, searchNumber);

        System.out.println("\nIndex of number:  " + answer);
    }
}
