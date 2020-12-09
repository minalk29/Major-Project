import { Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { Mcq } from './mcq';
import {ActivatedRoute,Router, ParamMap} from '@angular/router';
import { McqService } from 'src/app/mcq.service';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.scss']
})
export class McqComponent implements OnInit,AfterViewInit {
  @ViewChild("option1")
  option1DOM!: ElementRef;
  @ViewChild("option2")
  option2DOM!: ElementRef;
  @ViewChild("option3")
  option3DOM!: ElementRef;
  @ViewChild("option4")
  option4DOM!: ElementRef;
option1:string='';
option2:string='';
option3:string='';
option4:string='';
length:number;
id:any;
mcqs:Mcq[];
mcq:any;
inputStyle:string='';
disable:string='';
setValue:string='';
  constructor(private route:ActivatedRoute,private router:Router,private mcqserv:McqService) { 
    this.mcqs=mcqserv.getMcq();
    this.length=this.mcqs.length;
    this.route.paramMap.subscribe((p:ParamMap)=>
    {
      this.id=p.get('id'); 
      this.mcq=this.mcqs.find((m)=> m.id==this.id)
      console.log(this.mcq)
    })
  }
  ngAfterViewInit(): void {
    
    
  }
  ngOnInit(): void {
    this.option1DOM.nativeElement.className='default';
    this.option2DOM.nativeElement.className='default';
    this.option3DOM.nativeElement.className='default';
    this.option4DOM.nativeElement.className='default';
  }
  
goNext()
{
  if(this.id<this.length){
    let nextId=parseInt(this.id)+1;
    this.router.navigate(['/mcq',nextId]);
    this.option1DOM.nativeElement.className='default';
    this.option2DOM.nativeElement.className='default';
    this.option3DOM.nativeElement.className='default';
    this.option4DOM.nativeElement.className='default';
  }
}
goPrevious()
{
  if(this.id>1){
    let previousId=parseInt(this.id)-1;
    this.router.navigate(['/mcq',previousId]);
    this.option1DOM.nativeElement.className='default';
    this.option2DOM.nativeElement.className='default';
    this.option3DOM.nativeElement.className='default';
    this.option4DOM.nativeElement.className='default';
  }
  
}

selected(option:string)
{
  //this.divView.nativeElement.classList.remove='correct';
  //this.divView.nativeElement.className='incorrect';
  //console.log(option+  this.mcq.answer)
  let answer=this.mcq.answer;
  const opt={opt1:this.mcq.option1,
    opt2:this.mcq.option2,opt3:this.mcq.option3,opt4:this.mcq.option4};
    opt.opt1==answer? this.option1DOM.nativeElement.className='correct':(opt.opt2==answer? 
      this.option2DOM.nativeElement.className='correct':(opt.opt3==answer?
         this.option3DOM.nativeElement.className='correct':
         this.option4DOM.nativeElement.className='correct'));
  this.setValue="true";
  //this.option1DOM.nativeElement.className='default';
   if(option==this.mcq.answer)
  {
    console.log("in");
  }
  else{
    console.log("sorry");
  }
}
}

