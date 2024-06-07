// Define the Teacher interface
export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
  }
  
  // Create an instance a Teacher
  const teacher1: Teacher = {
    firstName: 'Thabo',
    fullTimeEmployee: false,
    lastName: 'Bester',
    location: 'Durban',
    contract: false,
  };

// Define the Directors interface extending Teacher
export interface Directors extends Teacher {
  numberOfReports: number;
}

// Create an instance of Directors
const director1: Directors = {
  firstName: 'Simon',
  lastName: 'Says',
  fullTimeEmployee: true,
  location: 'New Zealand',
  numberOfReports: 42,
};

// Create the function printTeacher that accepts two arguments
export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Interface for the printTeacher function
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define the interface for Student constructor
export interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

// Define the interface for StudentClass methods
export interface StudentClassInterface {
  displayName(): string;
  workOnHomework(): string;
}

// Define the StudentClass
export class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  displayName(): string {
    return this.firstName;
  }

  workOnHomework(): string {
    return "Currently working";
  }
}
