
public class Main {

    public static void main(String[] args) /*throws IOException*/ {

        String[] nameStudent = {"Jack", "Adam","Cooper","Henry","Alex"};
        int[] ageStudent = {20,19,17,21,23};
        int numberOfStudent = 5;
        Student[] arrayOfStudent = new Student[numberOfStudent];
        
        System.out.println("Students: ");
        for(int i=0; i<numberOfStudent; i++){

            arrayOfStudent[i]=new Student(nameStudent[i], ageStudent[i]);
            arrayOfStudent[i].info();
        }
        System.out.println();   

        Теаcher institutTeacher = new Теаcher("Mr. Einstein","physic",42);

        institutTeacher.assessStudent(arrayOfStudent[0],6);
        arrayOfStudent[0].lastMark();
        institutTeacher.assessStudent(arrayOfStudent[0],8);
        arrayOfStudent[0].lastMark();
        institutTeacher.assessStudent(arrayOfStudent[0],7);
        institutTeacher.assessStudent(arrayOfStudent[0],2);
        arrayOfStudent[0].lastMark();
    }
}
