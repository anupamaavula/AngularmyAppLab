import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private personService : PersonService) { }

  ngOnInit(): void {
  }
  handleFilterChange(event: any): void {
    this.personService.setPerson(event.target.value);
    // console.log(event.target.value);

  }

}
