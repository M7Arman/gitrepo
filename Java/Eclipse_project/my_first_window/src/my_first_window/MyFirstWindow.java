package my_first_window;

import javax.swing.JFrame;

public class MyFirstWindow extends JFrame{
	public static void main(String[] args){
		MyFirstWindow app = new MyFirstWindow();
		
		app.setVisible(true);
		
	}
	
	public MyFirstWindow () {
		super("My first window");
		
		setBounds(100,100,200,200);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	}
	
}