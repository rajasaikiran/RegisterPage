import { Component } from '@angular/core';
import { NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Person : Object[]=[];
  


  readData(ref:NgForm)
  {     
      let PersonDetails=(ref.value)
      
      if( this.Person.includes(PersonDetails) )
      
      alert("Already registered");

      else
            this.Person.push(PersonDetails);
       ref.reset()  
       console.log(PersonDetails)

    
  }
  // deleting the person

  deletePerson(x)
  {
    this.Person.splice(x,1)   
  }
 

}
