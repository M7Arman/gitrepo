import java.io.*;
import person.*;

public class Main {

    public static void main(String[] args) throws IOException {

        // name and age of students
        String[] nameStudent = {"Jack", "Adam", "Cooper", "Henry", "Alex"};
        int[] ageStudent = {20,19,17,21,23};

        //name and age of schoolchild
        String[] nameSchoolchild = {"Emily","Dmitriy","Leonardo","Isabella","Ivan","Matvey","Emma"};
        int[] ageSchoolchild = {10,18,7,13,12,10,16};

        //amount of students and schoolchild
        int numberOfStudent = 5;
        int numberOfSchoolchild = 7;

        Student[] arrayOfStudent = new Student[numberOfStudent];
        Schoolchild[] arrayOfSchoolchild = new Schoolchild[numberOfSchoolchild];


        //BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        System.out.println("Schoolchild: ");
        for(int i=0; i<numberOfSchoolchild; i++){
            arrayOfSchoolchild[i]=new Schoolchild(nameSchoolchild[i], ageSchoolchild[i]);
            arrayOfSchoolchild[i].info();	
        }
        System.out.println();

        System.out.println("Students: ");
        for(int i=0; i<numberOfStudent; i++){

            //TODO: parzel inchi e sxalov ashxatum?
            /*System.out.print("name of student (" + i + ") :  ");
             *nameStudent = br.readLine();
             *System.out.print("age of student (" + i + ") :  ");
             *ageStudent = br.read();
             */

            //give name and age of array Of objects
            arrayOfStudent[i]=new Student(nameStudent[i], ageStudent[i]);
            arrayOfStudent[i].info();

        }
        System.out.println();

        // new theacher

        Теаcher institutTeacher = new Теаcher("Mr. Einstein","physic",42);   	
        institutTeacher.infoTeacher();


        //TODO: Why dosen't work?
        //Teacher schoolTeacher = new Teacher("Mr. Thales","mathematics",25);
        //schoolTeacher.infoTeacher();


        // assess only to this student
        institutTeacher.assessStudent(arrayOfStudent[0],6);
        arrayOfStudent[0].lastMark();
        institutTeacher.assessStudent(arrayOfStudent[0],8);
        arrayOfStudent[0].lastMark();
        institutTeacher.assessStudent(arrayOfStudent[0],7);
        institutTeacher.assessStudent(arrayOfStudent[0],1);
        arrayOfStudent[0].lastMark();

        System.out.print("Schoolchild(2): ");
        arrayOfSchoolchild[2].info();
    }

}

