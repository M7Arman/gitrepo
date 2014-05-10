class Теаcher extends Employee {
    protected Student s2 = new Student("<name>",18);
    private String theme;

    public Теаcher(String name1,String theme, int age1) {
        name=name1;
        this.theme=theme;
        age=age1;
    }

    public void assessStudent(Student p,int mark){
        p.setMark(mark);

    }

    @Override
    public void info(){
        System.out.println("Theme: " + theme);
    }

}
