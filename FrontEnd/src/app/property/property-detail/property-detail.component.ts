import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
propertyid:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.propertyid=this.route.snapshot.params['id'];
  }

}
