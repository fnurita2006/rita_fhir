import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private ds: DatastoreService) { }
  patientData : any = {entry: []};

  flag = true;

  ngOnInit(): void {

   this.ds.getPatientData().subscribe(( data) => {
    this.patientData =data;
    debugger;
    })

    
  }

  sortData(key) {

    if (this.flag) {

    this.patientData.entry.sort((a,b) => (a.resource[key] > b.resource[key]) ? 1 : ((b.resource[key] > a.resource[key]) ? -1 : 0))
  } else {

    this.patientData.entry.sort((a,b) => (a.resource[key] <b.resource[key]) ? 1 : ((b.resource[key] < a.resource[key]) ? -1 : 0))
  }

  this.flag = !this.flag;
  }

}
