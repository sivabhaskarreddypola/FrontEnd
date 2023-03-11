import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertycard',
  templateUrl: './propertycard.component.html',
  styleUrls: ['./propertycard.component.css']
})
export class PropertycardComponent implements OnInit {
property:any={
  "id":1,
  "name":"siva",
  "type":"HDFC"
}
  constructor() { }

  ngOnInit() {
  }

}
