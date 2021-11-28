package com.ahci.fundamentals.g_files;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class FileOperations {
	public static void main(String[] args) {
		try {
			// Print files in the path
			Files.list(Paths.get("."))
			.forEach(System.out::println);
			
			//Print regular files
			Files.list(Paths.get("."))
	        .filter(Files::isRegularFile)
	        .forEach(System.out::println);
			
			// Print hidden files
			final File[] files = new File(".").listFiles(File::isHidden);
			Arrays.stream(files).forEach(System.out::println);

			
			// Reading a file
			Path filePath = Paths.get("./src", "test.txt");
			System.out.println(filePath.getParent());
			
			Stream<String> lines = Files.lines( filePath );
			lines.forEach(System.out::println);
			System.out.println();
			
			// Filtering a file
			lines = Files.lines( filePath );
			List<String> filteredLines = lines
                    .filter(s -> s.contains("sit amet"))
                    .collect(Collectors.toList());
			
			filteredLines.forEach(System.out::println);
			
			
			// Writing to a file
			String content = "Hello Java 8 !!";
			 
			Files.write(Paths.get("./src","output.txt"), content.getBytes());
			
			
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
		
	}
}
