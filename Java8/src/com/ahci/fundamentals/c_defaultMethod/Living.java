package com.ahci.fundamentals.c_defaultMethod;

public interface Living {
	default public void move() {
		System.out.println("Living Move");
	}
}
