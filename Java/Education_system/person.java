package projectPerson;

public class Person {
    public ArrayList <String> List = new <String> ArrayList();
    public int index=0;

    public void addPerson(String addName) {
        List.add(addName);
        index++;
    }

    public void findPerson (String searchingName) {
        System.out.print("Hi man!");
    }
    public void getName(int i){
        System.out.print("List: " + List);
    }
}
