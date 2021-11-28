package com.ahci.fundamentals.b_lambdaExpressions.functionalInterface;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

// Also called Single Abstract Method interfaces (SAM Interfaces)
// can contain only one method
// functional interfaces can be represented using 
// o Lambda expressions
// o Method reference 
// o Constructor References
public class FunctionalInterfaces {
	public static void main(String[] args) {
		List<Integer> list = new ArrayList<Integer>();
		list.add(1);
		list.add(2);
		list.add(3);
		list.add(4);
		list.add(5);
		list.add(6);
		
		// implement the only method: doOperation with lambda expressions
		Operation multiply = (Integer i) -> i*2;
		Operation square = (Integer i) -> i*i;
		
		// use multiply
		List<Integer> list2 = list.stream().map(m->multiply.doOperation(m)).collect(Collectors.toList());
		list2.forEach(System.out::println);
		
		// use square
		list2 = list.stream().map(m->square.doOperation(m)).collect(Collectors.toList());
		list2.forEach(System.out::println);
		
		
		// Runnable is a FunctionalInterface too
		new Thread(()-> 
	       {System.out.println("New thread created");}).start(); 
	}
}
