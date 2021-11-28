package com.ahci.fundamentals.c_defaultMethod;

public class DefaultMethod {

	public static void main(String[] args) {
		// Choses living move because its overridden
		Living living = new LivingClass();
		living.move();
		
		// Choses bird move because its more specific (Bird extends Animal)
		Animal animal = new AnimalClass();
		animal.move();
		
	}

}
