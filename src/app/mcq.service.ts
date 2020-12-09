import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class McqService {

  constructor() { }
  getMcq(){
    return [{id:1,
      questions:"OS computer abbreviation usually means?",
    option1:"Order of Significance",
    option2:"Open Software",option3:"Operating System",
    option4:"Optical Sensor",answer:"Operating System",
    quemarks:1,quizid:1,typeid:1},
    {id:2,
      questions:"OS?",
    option1:"Order of Significance",
    option2:"Open Software",option3:"Operating System",
    option4:"Optical Sensor",answer:"Open Software",
    quemarks:1,quizid:1,typeid:1}
  ]
  }
}
