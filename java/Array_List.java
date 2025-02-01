import java.util.List;
import java.util.ArrayList;
import java.util.ListIterator;

public class Array_List {
    public static void main(String[] args) {
        List<Integer> li = new ArrayList<Integer>();
        li.add(1);
        li.add(2);
        li.add(3);
        li.add(4);

        // iterating an arraylist
        // By index
        for (int i = 0; i < li.size(); i++) {
            System.out.println(li.get(i));
        }

        // By using iterator
        ListIterator<Integer> it = li.listIterator();
        while (it.hasNext()) {
            System.out.println(it.next());
        }

    }
}