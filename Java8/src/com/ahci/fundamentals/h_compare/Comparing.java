package com.ahci.fundamentals.h_compare;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class Comparing {

	public static void main(String[] args) {
		Comparing comparing = new Comparing();
		ArrayList<Student> studentList = new ArrayList<Student>();
		studentList.add(comparing.new Student("1","Michael",10));
		studentList.add(comparing.new Student("2","Jordan",15));
		studentList.add(comparing.new Student("3","Kobe",31));
		studentList.add(comparing.new Student("4","Bryany",25));
		studentList.add(comparing.new Student("5","Jackie",765));
		studentList.add(comparing.new Student("6","Chan",74));
		studentList.add(comparing.new Student("7","David",141));
		studentList.add(comparing.new Student("8","Beckham",76));
		
		
		Comparator<Student> comparatorById = Comparator.comparing(e -> e.getId());
		Collections.sort(studentList, comparatorById);
		System.out.println(studentList);
		
		Comparator<Student> comparatorByName = (Student s1, Student s2) -> s1.getName().compareTo(s2.getName());
		Collections.sort(studentList, comparatorByName);
		System.out.println(studentList);
		
		Comparator<Student> comparatorByNo = Comparator.comparing(e -> e.getNo());
		Collections.sort(studentList, comparatorByNo);
		System.out.println(studentList);
	}

	public class Student {
		private String id;
		private String name;
		private int no;
		
		public Student(String id, String name, int no) {
			super();
			this.id = id;
			this.name = name;
			this.no = no;
		}
		
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public int getNo() {
			return no;
		}
		public void setNo(int no) {
			this.no = no;
		}

		@Override
		public String toString() {
			return "Student [id=" + id + ", name=" + name + ", no=" + no + "]";
		}
		
	}
}
