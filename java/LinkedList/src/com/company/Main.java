package com.company;

public class Main {

    public static void main(String[] args) {
        LinkedList myList = new LinkedList();
        myList.addFirst(20);
        myList.addLast(30);
        myList.addFirst(10);
        myList.removeFirst();
        myList.removeLast();
        System.out.println(myList.indexOf(50));
        System.out.println(myList.contains(30));

    }
}
