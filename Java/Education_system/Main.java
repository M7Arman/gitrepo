import java.io.*;

public class Main {

    public static void main(String[] args) throws IOException {

        String[] nameStudent = {"Jack", "Adam","Cooper","Henry","Alex"};
        int[] ageStudent = {20,19,17,21,23};
        Student[] arrayOfStudent = new Student[5];


        for(int i=0; i<5; i++){

            arrayOfStudent[i]=new Student(nameStudent[i], ageStudent[i]);
            arrayOfStudent[i].info();
            System.out.println();
        }
        Теаcher firstTeacher = new Теаcher("Mr. Einstein","physic",42);

        firstTeacher.assessStudent(arrayOfStudent[0],6);
        arrayOfStudent[0].lastMark();
        firstTeacher.info();
    }
}
