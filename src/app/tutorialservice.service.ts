import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TutorialserviceService {
 

  constructor(private http:HttpClient) { }
  getAlltut() {
    alert("hiii");
    return this.http.get("http://localhost:8080/api/tutorials");
  }
}
