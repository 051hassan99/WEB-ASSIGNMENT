import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';

@Component({
  selector: 'app-giveFeedback',
  templateUrl: './giveFeedback.component.html',
  styleUrls: ['./giveFeedback.component.css']
})
export class GiveFeedbackComponent implements OnInit {
  name:string;
  feedback:string;
  constructor(private _data:DataService) { }

  ngOnInit(): void {
  }
  giveFeedback(){
   
  var ret;
  let student={
    name:this.name,
    givenFeedback:this.feedback
  };
this._data.giveFeedback(student).subscribe(
  data => { ret = data},
  err => console.error(err),
  () => console.log('Feedbak Added')
  );
  alert("Feedback Added Successfully");
  this.name='';
  this.feedback='';
    }

  }


