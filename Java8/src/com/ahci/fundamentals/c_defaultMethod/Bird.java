package com.ahci.fundamentals.c_defaultMethod;

public interface Bird extends Animal{
	default void move() {
		System.out.println("I'm Flying!");
	}
}
