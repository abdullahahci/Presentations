package com.ahci.fundamentals.a_streams;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.DoubleStream;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class BoxedStreams {
	public static void main(String[] args) {
		
		// primitive type streams needs to be boxed to be collected to a list
		List<Integer> intsBoxed = IntStream.of(1,2,3,4,5)
                .boxed()
                .collect(Collectors.toList());
		
		List<Integer> ints = Stream.of(1,2,3,4,5)
                .collect(Collectors.toList());
		
		System.out.println(ints.equals(intsBoxed));
		
		List<Double> doublesBoxed = DoubleStream.of(1,2,3,4,5)
                .boxed()
                .collect(Collectors.toList());
		
		List<Double> doubles = Stream.of(1d,2d,3d,4d,5d)
                .collect(Collectors.toList());
		
		System.out.println(doubles.equals(doublesBoxed));
		
	}
}
