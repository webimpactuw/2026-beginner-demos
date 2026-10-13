import javax.swing.*;
import javax.swing.event.HyperlinkEvent;
import java.awt.*;
import java.net.URL;

public class Browser {
    public static void main(String[] args) {
        System.setProperty("http.agent", "MyBrowser/1.0");
        JFrame frame = new JFrame("My Browser");
        JEditorPane page = new JEditorPane();

        page.setEditable(false);

        page.addHyperlinkListener(e -> {
            if (e.getEventType() != HyperlinkEvent.EventType.ACTIVATED) {
                return;
            }
            try {
                URL url = e.getURL();
                if (url == null) {
                    url = page.getPage().toURI().resolve(e.getDescription()).toURL();
                }
                page.setPage(url);
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        });

        try {
            page.setPage("https://en.wikipedia.org/wiki/Browser");
        } catch (Exception e) {
            e.printStackTrace();
        }

        frame.add(new JScrollPane(page));
        frame.setSize(800, 600);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
