import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent {
  property:any ={
    "Id":1,
    "Name":"Sailaja House",
    "Type":"House",
    "Price":120000
  }

}
