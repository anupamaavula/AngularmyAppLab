import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private personInput: string = "";
  private personArr: Person[]= [
    new Person("Jhonny","Maria",true),
    new Person("Amy","Jackson",false),
    new Person("Lauren","Sammy",true)
];
constructor() { }

 getPerson():Person[]{
    return this.personArr.filter((Person)=>{return Person.getFirstName().toLowerCase().includes(this.personInput.toLowerCase());
  });
}
getPersons(): Observable<Person[]> {
  return of(PERSON);
  
}
  setPerson(formInput: string): void {
    // console.log("From person service:",this.personInput);
    this.personInput = formInput;
  }
  
 }
