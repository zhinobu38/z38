package com.company;

import com.sun.org.apache.xpath.internal.operations.Bool;

public class LinkedList {

    private class Node {
        private int value;
        private Node next;
        private Node(int value) {
            this.value = value;
        }
    }

    private Node first;
    private Node last;

    private boolean isEmpty() {
        return first == null;
    }

    public void addLast(int item) {
        Node node = new Node(item);
        if (isEmpty()) {
            first = last = node;
        }
        else {
            last.next = node;
            last = node;
        }
    }

    public void removeLast() {
        Node previous = getPrevious(last);
        last = previous;
        last.next = null;
    }

    public void addFirst(int item) {
        Node node = new Node(item);
        if (isEmpty()) {
            first = last = node;
        }
        else {
            node.next = first;
            first = node;
        }
    }

    public void removeFirst() {
        Node delete = first;
        first = first.next;
        delete = null;
    }

    public int indexOf(int value) {
        Node current = first;
        int index = 0;
        while (current != null){
            if (current.value == value) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    public boolean contains(int value) {
        return indexOf(value) != -1;
    }

    private Node getPrevious(Node node) {
        Node previous = first;
        while (previous != null) {
            if (previous.next == last) return previous;
            previous = previous.next;
        }
        return null;
    }
}
