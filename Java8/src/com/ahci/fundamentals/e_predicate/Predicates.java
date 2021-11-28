package com.ahci.fundamentals.e_predicate;

import static com.ahci.fundamentals.e_predicate.PatientPredicates.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
public class Predicates {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Patient p1 = new Patient(1,23,"M","John","Doe");
        Patient p2 = new Patient(2,13,"F","Snow","White");
        Patient p3 = new Patient(3,43,"M","Johnny","Depp");
        Patient p4 = new Patient(4,26,"M","Bill","Gates");
        Patient p5 = new Patient(5,19,"F","Angelina","Jolie");
        Patient p6 = new Patient(6,15,"M","Elvis","Presley");
        Patient p7 = new Patient(7,68,"F","Natalie","Portman");
        Patient p8 = new Patient(8,79,"M","Keanu","Reeves");
        Patient p9 = new Patient(9,15,"F","Ellen","DeGeneres");
        Patient p10 = new Patient(10,45,"M","Lionel","Messi");
         
        List<Patient> patients = new ArrayList<Patient>();
        patients.addAll(Arrays.asList(new Patient[]{p1,p2,p3,p4,p5,p6,p7,p8,p9,p10}));
                
        System.out.println( PatientPredicates.filterPatients(patients, isAdultMale()) );
         
        System.out.println( filterPatients(patients, isAdultFemale()) );
         
        System.out.println( filterPatients(patients, isAgeMoreThan(35)) );
         
        //Patients other than above collection of "isAgeMoreThan(35)" 
        //can be get using negate()
        System.out.println(filterPatients(patients, isAgeMoreThan(35).negate()));
	}

}
