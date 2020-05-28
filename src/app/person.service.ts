import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private personInput: string = "";
  private personArr: Person[]= [
    new Person("Jhonny","Maria",true),
    new Person("Amy","Jackson",false),
    new Person("Lauren","sammy",true)
];
constructor() { }

 getPerson():Person[]{
    return this.personArr.filter((Person)=>{return Person.getFirstName().toLowerCase().includes(this.personInput.toLowerCase());
  });
}
  setPerson(formInput: string): void {
    // console.log("From person service:",this.personInput);
    this.personInput = formInput;
  }
 }
