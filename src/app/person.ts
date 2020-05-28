export class Person {
        //Properties
         firstName: string;
         lastName: string;
         hasPet: boolean;
         //Constructor
         constructor(firstName: string,lastName: string,hasPet:boolean) 
          {
            this.firstName = firstName;
            this.lastName = lastName;
            this.hasPet = hasPet;
            
          }
          //Getters and Setters
          getFirstName() : string{
            return this.firstName;
          }
          setFirstName(firstName: string): void {
            this.firstName = firstName;
          }
          getLastName() : string{
            return this.lastName;
          }
          setLastName(lastName: string): void {
            this.lastName = lastName;
          }
          gethasPet() : boolean{
            return this.hasPet;
          }
          setAge(hasPet: boolean): void {
            this.hasPet = hasPet;
          }
          //Methods
         fullName(): string {
            return "My name is " + this.firstName + " " + this.lastName;
          }
}
