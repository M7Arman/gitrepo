
public class Learner extends Person {

//TODO: private or protected
    protected int[] mark;
    protected int top = 0;

// Metods
    public void lastMark(){
        System.out.println("last mark of " + name + ":   " + mark);
    }
    public void setMark(int mark1){
        mark[top]=mark1;
        top++;
    }
}
