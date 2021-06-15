import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';

@Component({
  selector: 'app-uploadQuizMarks',
  templateUrl: './uploadQuizMarks.component.html',
  styleUrls: ['./uploadQuizMarks.component.css']
})
export class UploadQuizMarksComponent implements OnInit {
  name:string;
  courseName:string;
  quizNo:Number;
  obtainedMarks:Number;
  totalMarks:Number;

  constructor(private _data:DataService) { }

  ngOnInit(): void {
  }
  uploadQuizMarks(){
   
  var ret;
  let student={
    name:this.name,
    courseName:this.courseName,
    quizNo:this.quizNo,
    obtainedMarks:this.obtainedMarks,
    totalMarks:this.totalMarks,

  };
this._data.uploadQuizMarks(student).subscribe(
  data => { ret = data},
  err => console.error(err),
  () => console.log('Quiz Marks Added')
  );
  alert("Quiz Marks Added Successfully");
  this.name ='',
  this.courseName='',
  this.quizNo=null,
  this.obtainedMarks=null,
  this.totalMarks=null
    }

  }


