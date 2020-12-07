import { Component, OnInit } from '@angular/core';
import { TutorialserviceService } from '../tutorialservice.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
tutorial:any;
  constructor(private tutoService:TutorialserviceService) { }

  ngOnInit(): void {

    
      this.tutoService.getAlltut()
        .subscribe((res:any)=>{
         console.log(res);
          
          this.tutorial=res;
        });
    


  }






}
