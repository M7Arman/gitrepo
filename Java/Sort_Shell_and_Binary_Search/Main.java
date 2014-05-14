import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner inp = new Scanner( System.in );

        int[] theArray = new int[args.length];
        int searchNumber = 1;
        int searchNumberTwo = 1;
        int answer = -2;
        int answerRecursive = -2;

        for(int i=0; i<theArray.length; i++)
            theArray[i]=Integer.parseInt(args[i]);

        ShellSort ss = new ShellSort();
        ss.shell(theArray);

        System.out.print("\nfirst serach number = ");
        searchNumber = inp.nextInt();
        System.out.print("\nsecond serach number = ");
        searchNumberTwo = inp.nextInt();


        BinarySearch bs = new BinarySearch();
        answer = bs.search(theArray, searchNumber);
        
        int indexMax = theArray.length-1;
        int indexMin = 0;
        answerRecursive = bs.search(theArray, searchNumberTwo, indexMin, indexMax);

        System.out.println("\nIndex of number:  " + answer);
        System.out.println("\nIndex of number:  " + answerRecursive);

    }
}
