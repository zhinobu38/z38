package com.company;

public class Array {
    private int[] items;
    private int qty=0;

    public Array(int length) {
        items = new int[length];
    }

    public void print() {
        for (int i = 0; i < qty; i++) {
            System.out.println(items[i]);
        }
    }

    public void insert(int value) {
        if (items.length == qty) {
            int[] newItems = new int[items.length * 2];
            for (int i = 0; i < qty; i++) {
                newItems[i] = items[i];
            }
            items = newItems;
        }
        items[qty++] = value;
    }

    public void removeAt(int index) {
        if (index >= qty || index < 0) {
            throw new IllegalArgumentException("Index is out or range.");
        }
        for (int i = index; i < qty; i++) {
            items[i] = items[i + 1];
        }
        qty--;
    }

    public int indexOf(int value) {
        for (int i = 0; i < qty; i++){
            if (items[i] == value) {
                return i;
            }
        }
        return -1;
    }
}
