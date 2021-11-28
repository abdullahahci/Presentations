package com.ahci.fundamentals.c_defaultMethod;

public class LivingClass implements Bird, Living {

	// Need to override move because its seen duplicate
	@Override
	public void move() {
		Living.super.move();
	}

}
