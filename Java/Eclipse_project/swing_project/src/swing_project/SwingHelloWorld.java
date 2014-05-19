package swing_project;
import javax.swing.*;

public final class SwingHelloWorld implements Runnable {

    public static void main(String[] args) {
        try {
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        } 
        catch (Exception e) {
        //Exception handle
        }
        SwingUtilities.invokeLater (new SwingHelloWorld());
        
    } 

    public void run() {

        // Создаем окно с заголовком "Hello, World!"

        JFrame f = new JFrame ("Hello, World!");


        // Теперь же есть более "правильный" способ задав реакцию на закрытие окна.
        // Данный способ уничтожает текущее окно, но не останавливает приложение. Тем
        // самым приложение будет работать пока не будут закрыты все окна.

        f.setDefaultCloseOperation (JFrame.DISPOSE_ON_CLOSE);


        // Добавляем на панель окна нередактируемый компонент с текстом.

        //f.getContentPane().add (new JLabel("Hello, World!")); - старый стиль
        f.add(new JLabel("Hello World"));

        // pack() "упаковывает" окно до оптимального размера, рассчитанного на основании размеров 
        // всех расположенных в нем компонентов.

        f.pack();

        // Показать окно

        f.setVisible(true);
    }
}