package com.ahci.fundamentals.e_predicate;

import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;
 
public class PatientPredicates 
{
    public static Predicate<Patient> isAdultMale() {
        return p -> p.getAge() > 21 && p.getGender().equalsIgnoreCase("M");
    }
     
    public static Predicate<Patient> isAdultFemale() {
        return p -> p.getAge() > 18 && p.getGender().equalsIgnoreCase("F");
    }
     
    public static Predicate<Patient> isAgeMoreThan(Integer age) {
        return p -> p.getAge() > age;
    }
     
    public static List<Patient> filterPatients (List<Patient> patients, 
                                                Predicate<Patient> predicate) 
    {
        return patients.stream()
                    .filter( predicate )
                    .collect(Collectors.<Patient>toList());
    }
}  