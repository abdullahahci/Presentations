package com.ahci.fundamentals.f_dateTime;

import java.time.Duration;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.Period;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

public class DateTimes {

	public static void main(String[] args) {
		// New date time api
		LocalDate localDate = LocalDate.now();
		System.out.println(localDate.toString());                //2020-03-07
		System.out.println(localDate.getDayOfWeek().toString()); //SATURDAY
		System.out.println(localDate.getDayOfMonth());           //7
		System.out.println(localDate.getDayOfYear());            //67
		System.out.println(localDate.isLeapYear());              //true
		System.out.println(localDate.plusDays(25).toString());   //2020-04-01
		
		LocalTime localTime = LocalTime.of(12, 20);
		System.out.println(localTime.toString());    //12:20
		System.out.println(localTime.getHour());     //12
		System.out.println(localTime.getMinute());   //20
		System.out.println(localTime.getSecond());   //0
		System.out.println(LocalTime.MIDNIGHT);      //00:00
		System.out.println(LocalTime.NOON);          //12:00
		
		LocalDateTime localDateTime = LocalDateTime.now(); 
		System.out.println(localDateTime.toString());      //2020-03-07T17:44:27.629
		System.out.println(localDateTime.getDayOfMonth()); //7
		System.out.println(localDateTime.getHour());       //17
		System.out.println(localDateTime.getNano());       //629000000
		
		// String to date
		String date = "2020-01-05";
		LocalDate dt = LocalDate.parse(date);
		System.out.println("Date: " + dt);
		 
		String dateTime = "2020-03-05T11:50";
		LocalDateTime dtm = LocalDateTime.parse(dateTime);
		System.out.println("Date/Time: " + dtm);
		
		String anotherDate = "04 Apr 2020";
		DateTimeFormatter df = DateTimeFormatter.ofPattern("dd MMM yyyy");
		LocalDate random = LocalDate.parse(anotherDate, df);
		System.out.println(anotherDate + " parses as " + random);
		
		
		//ZonedDateTime
		ZonedDateTime zonedDateTime = ZonedDateTime.now(ZoneId.of("Europe/Paris"));
		System.out.println(zonedDateTime.toString());
		
		zonedDateTime = ZonedDateTime.now(ZoneId.of("Asia/Kuala_Lumpur"));
		System.out.println(zonedDateTime.toString());
		
		zonedDateTime = ZonedDateTime.now(ZoneId.of("America/New_York"));
		System.out.println(zonedDateTime.toString());
		
		
		//Instant
		Instant instant = Instant.now();
		System.out.println(instant.toString());                                 //2020-03-07T14:50:30.817Z
		System.out.println(instant.plus(Duration.ofMillis(5000)).toString());   //2020-03-07T14:50:35.817Z
		System.out.println(instant.minus(Duration.ofMillis(5000)).toString());  //2020-03-07T14:50:25.817Z
		System.out.println(instant.minusSeconds(10).toString());                //2020-03-07T14:50:20.817Z
		
		// Duration
		Duration duration = Duration.ofMillis(5000);
		System.out.println(duration.toString());     //PT5S
		 
		duration = Duration.ofSeconds(83);
		System.out.println(duration.toString());     //PT1M23S
		 
		duration = Duration.ofMinutes(20);
		System.out.println(duration.toString());     //PT20M
		 
		duration = Duration.ofHours(2);
		System.out.println(duration.toString());     //PT2H
		 
		duration = Duration.between(Instant.now(), Instant.now().plus(Duration.ofMinutes(100)));
		System.out.println(duration.toString());  //PT1H40M
		
		// Period
		Period period = Period.ofDays(6);
		System.out.println(period.toString());    //P6D
		 
		period = Period.ofMonths(8);
		System.out.println(period.toString());    //P8M
		 
		period = Period.between(LocalDate.now(), 
		            LocalDate.now().plusDays(73));
		System.out.println(period.toString());   //P2M12D
		
	}

}
