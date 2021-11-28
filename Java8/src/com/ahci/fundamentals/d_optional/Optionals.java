package com.ahci.fundamentals.d_optional;

import java.util.Optional;

public class Optionals {
	public static void main(String[] args) {
		Optional<Integer> optional;
		Optional<String> optionalString;
		
		optional = Optional.of(5);
		System.out.println("Optional present:"+ optional.isPresent());
		System.out.println("Optional value:"+ optional.get());

		optional = Optional.empty();
		System.out.println("Empty Optional present:"+ optional.isPresent());
		

		optional = Optional.ofNullable(null);
		System.out.println("Nullable Optional present (null):"+ optional.isPresent());
		optional = Optional.ofNullable(5);
		System.out.println("Nullable Optional present:"+ optional.isPresent());
		System.out.println("Nullable Optional value:"+ optional.get());
		
		optionalString = Optional.of("(Optional ifPresent) I'm here");
		optionalString.ifPresent(System.out::println);
		
		optionalString = Optional.of("(Optional orElse) Optional present");
		String normalString = optionalString.orElse("(Optional orElse) Optional not present");
		System.out.println(normalString);
		
		optionalString = Optional.empty();
		normalString = optionalString.orElse("(Optional orElse) Optional not present");
		System.out.println(normalString);
		
		try {
			normalString = optionalString.orElseThrow(IllegalStateException::new);
		}
		catch (IllegalStateException e) {
			System.out.println("Illegal State Exception catched");
		}
		
		
		
	}
}
