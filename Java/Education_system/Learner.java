
public class Learner extends Person {

//TODO: private or protected
    protected int[] mark = {0,0,0,0,0};
    protected int top = 1;

// Metods
    public void lastMark(){
        System.out.println("last mark of " + name + ":   " + mark[top-1]);
    }
    public void setMark(int mark1){
        mark[top]=mark1;
        top++;
    }
}
