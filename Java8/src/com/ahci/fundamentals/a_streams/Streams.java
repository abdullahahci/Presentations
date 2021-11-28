package com.ahci.fundamentals.a_streams;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class Streams {
	public static void main(String[] args) {
		// 1 - Creating Streams
		//Creating stream with parameters
		Stream<Integer> stream = Stream.of(1,2,3,4,5,6,7,8,9);
        stream.forEach(p -> System.out.println(p));
        
        //Creating stream with array
        stream = Stream.of( new Integer[]{11,12,13,14,15,16,17,18,19} );
        stream.forEach(p -> System.out.println(p));
        
        //Getting stream from list
        List<Integer> list = new ArrayList<Integer>();
        for(int i = 21; i<30; i++){
            list.add(i);
        }
        stream = list.stream();
        stream.forEach(p -> System.out.println(p));
        
        // Creating stream with some functions
        IntStream intstream = "ABCDEFGabcdefg".chars();
        intstream.forEach(p -> System.out.println(p));
        
        intstream = "ABCDEFGabcdefg".codePoints();
        intstream.forEach(p -> System.out.println(p));
        
        
        Stream.of("A$B$C$D$E$F$G".split("\\$")).forEach(p -> System.out.println(p));
        
        
        // 2 - Getting collection from stream
        list = new ArrayList<Integer>();
        for(int i = 1; i< 10; i++){
            list.add(i);
        }
        stream = list.stream();
        List<Integer> evenNumbersList = stream.filter(i -> i%2 == 0).collect(Collectors.toList());
        System.out.println(evenNumbersList);
        
        // need to create another stream because it is used before
        // delete the line below to see the error
        stream = list.stream();
        List<Integer> squareList = stream.map(i -> i*i).collect(Collectors.toList());
        System.out.println(squareList);
        
        stream = list.stream();
        Integer[] oddNumbersArr = stream.filter(i -> i%2 != 0).toArray(Integer[]::new);
        Stream.of(oddNumbersArr).forEach(System.out::print);
        System.out.println();
        
        
        // 3 - Stream operations
        List<String> names = new ArrayList<>();
        names.add("Michael");
        names.add("Adam");
        names.add("Joseph");
        names.add("Noah");
        names.add("Aaron");
        names.add("Abraham");
        names.add("Elijah");
        names.add("Isaac");
        names.add("Jacob");
        names.add("Gabriel");
        
        // filter() function
        System.out.println("Printing names that starts with A");
        names.stream().filter((s) -> s.startsWith("A"))
        .forEach(System.out::println);
        System.out.println("*********");

        // limit() function
        System.out.println("Printing 2 names that starts with A");
        names.stream().filter((s) -> s.startsWith("A"))
        .limit(2)
        .forEach(System.out::println);
        System.out.println("*********");
        
        // skip() function
        System.out.println("Printing 2 names that starts with A after 1 skip");
        names.stream().filter((s) -> s.startsWith("A"))
        .skip(1)
        .limit(2)
        .forEach(System.out::println);
        System.out.println("*********");
        
        // count() function
        long count = names.stream().filter((s) -> s.startsWith("A")).count();
        System.out.println("Count of names that starts with A : " + count);
        System.out.println("*********");
        
        // map() function with method reference
        System.out.println("Printing names lowercase with method reference");
        names.stream().map(String::toLowerCase)
        .forEach(System.out::println);
        System.out.println("*********");
        
        // map() function with lambda expression
        System.out.println("Printing names uppercase with lambda expression");
        Locale locale = new Locale("en");
        names.stream().map(s->s.toUpperCase(locale))
        .forEach(System.out::println);
        System.out.println("*********");
        
        // sorted() function
        System.out.println("Printing names after sort");
        names.stream().map(s->s.toUpperCase(locale)).sorted()
        .forEach(System.out::println);
        System.out.println("*********");
        
        // reduce() function
        System.out.println("Printing names with a ',' delimeter");
        Optional<String> reduced = names.stream()
                .reduce((s1,s2) -> s1 + ", " + s2);
        reduced.ifPresent(System.out::println);

        // distinct() function 
        names.stream().map(s->s.substring(0, 1)).sorted().distinct()
        .forEach(System.out::println);
        System.out.println("*********");
        
        // peek() function
        names.stream().peek(s->System.out.println("first peek:"+s))
        .map(s->s.substring(0, 1))
        .peek(s->System.out.println("second peek:"+s))
        .sorted()
        .peek(s->System.out.println("third peek:"+s))
        .distinct()
        .forEach(System.out::println);
        
        
        // match() function
        // A - anyMatch
        boolean matchedResult = names.stream().anyMatch((s) -> s.startsWith("A"));
        if(matchedResult)
        	System.out.println("Results matched (any)");
        else
        	System.out.println("Results didnt match (any)");
        
        // B - allMatch
        matchedResult = names.stream().allMatch((s) -> s.startsWith("A"));
        if(matchedResult)
        	System.out.println("Results matched (all)");
        else
        	System.out.println("Results didnt match (all)");
		
        // C - noneMatch
		matchedResult = names.stream().noneMatch((s) -> s.startsWith("D"));
		if(matchedResult)
        	System.out.println("Results matched (none)");
        else
        	System.out.println("Results didnt match (none)");
		
		
		// Find first
		Optional<String> firstMatchedName = names.stream()
                .filter((s) -> s.startsWith("J"))
                .sorted()
                .findFirst();
		System.out.print("First matched name with J:");
		firstMatchedName.ifPresent(System.out::println);
		
		System.out.println("*********");
		

        // min, max
        List<Integer> intList = Arrays.asList(2, 4, 1, 3, 7, 5, 9, 6, 8);
        Optional<Integer> minNumber = intList.stream()
                                .min((i, j) -> i.compareTo(j));
        
        Optional<Integer> maxNumber = intList.stream()
                                .max((i, j) -> i.compareTo(j));
        
        System.out.printf("min:%s , max:%s", minNumber.get(), maxNumber.get());
        System.out.println();
        System.out.println("*********");
	}
}
