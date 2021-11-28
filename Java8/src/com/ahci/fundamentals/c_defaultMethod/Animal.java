package com.ahci.fundamentals.c_defaultMethod;

public interface Animal {
	default void move() {
		System.out.println("I'm Moving!");
	}
}
