import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Registration } from '../followup/Registration';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class S1Service {

  constructor(private http:HttpClient) { }


  addPerson(ob:Registration)
  {
    let body=JSON.stringify(ob);
    let options = { 
      headers: new HttpHeaders().set('Content-Type', 'application/json')
      };
      console.log("with outStringfy:",ob);
      console.log("with stringfy data:",body);
   return this.http.post("http://localhost:8080/user/new",body,options);
  }


  getAllPersons()
  {
    return this.http.get<Registration>("http://localhost:8080/user/getall");
     
  }

  deletePerson(id:number)
  {
    return this.http.delete("http://localhost:8080/user/"+id);
  }

  update(id:number,ob)
  {
    let body=JSON.stringify(ob);
    let options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };


    return this.http.put("http://localhost:8080/user/"+id,body,options);
  }
}
