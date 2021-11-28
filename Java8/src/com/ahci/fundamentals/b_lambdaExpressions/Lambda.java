package com.ahci.fundamentals.b_lambdaExpressions;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Lambda {
	public static void main(String[] args) {
		// This is a lambda expression
		// One line codes can be written like this, no semicolon
		new Thread(() -> System.out.println("My Runnable")).start();

		// Another Lambda Expression
		// Need curly braces when code is multiline
		new Thread(() -> {
			System.out.print("My Runnable");
			System.out.println(" with multiline");
		}).start();
		
		// Lambda used in forEach
		List<String> pointList = new ArrayList();
		pointList.add("Point 1");
		pointList.add("Point 2");

		pointList.forEach(p -> System.out.println(p));

		// Used method refference
		Student[] employees = { 
				new Student("Michael"), 
				new Student("Adam"), 
				new Student("Joseph"),
				new Student("Noah") };

		System.out.println("Before Sorting Names: " + Arrays.toString(employees));
		Arrays.sort(employees, Student::nameCompare);
		System.out.println("After Sorting Names " + Arrays.toString(employees));
		
		
	}

}

class Student {
	String name;

	Student(String name) {
		this.name = name;
	}

	public static int nameCompare(Student a1, Student a2) {
		return a1.name.compareTo(a2.name);
	}

	public String toString() {
		return name;
	}
}
