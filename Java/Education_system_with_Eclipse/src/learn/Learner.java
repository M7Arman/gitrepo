package learn;

public class Learner extends Person {
//TODO: private or protected
	private int[] mark = {0,0,0,0,0,0,0,0,0};
	private int top = 1;
    
	
// Metods
    public void lastMark(){
        System.out.println("\nlast mark of " + name + ":   " + mark[top-1]);
    }
    public void setMark(int mark1){
    	mark[top]=mark1;
    	top++;
    }
}
