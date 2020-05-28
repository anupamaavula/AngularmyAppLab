import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listOfPerson: any;
  
  constructor(private personService : PersonService) { }

  // ngOnInit(): void {
  // }
  get dataList() : Person []{
    return this.personService.getPerson();
 }
 ngOnInit(): void {
  this.personService.getPerson().subscribe((persons: any) => {
    this.listOfPerson = persons;
  });
}
 async delay(ms: number) {
  await new Promise(resolve => setTimeout(()=>resolve(), ms));

}
}
