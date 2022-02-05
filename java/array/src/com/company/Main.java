package com.company;

public class Main {
    public static void main(String[] args) {
        Array numbers = new Array(3);
        numbers.insert(5);
        numbers.insert(3);
        numbers.insert(8);
        numbers.insert(9);
        numbers.removeAt(2);
        numbers.print();
        System.out.println("IndexOf:" + numbers.indexOf(3));
    }
}
