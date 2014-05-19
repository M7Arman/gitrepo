package learn;


public class Teacher extends Employee {	
	private Student s2 = new Student("<name>",18);
	private String theme;
	
	
	public Teacher(String name1, String theme, int age1) {
		name=name1;
		this.theme=theme;
		age=age1;
	}
	
	// student evaluation on behalf of teacher
	public void assessStudent(Student s1,int mark){
				s2=s1;
				s2.setMark(mark);;
				
	}
	
    public void infoTeacher(){
    	System.out.print("\nTeacher(" + theme + "):  ");
    	info();
    }
    
    
	
}
