import { Component, OnInit } from '@angular/core';
import { HosingService } from 'src/app/service/hosing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
 name:any="siva";
  Properties:any;
  constructor(private _housingservice:HosingService) { }

  ngOnInit() {

    this._housingservice.getAllProperties().subscribe(
      data=>{
        this.Properties=data;
        console.log(data);
      }










    )
  }

}
