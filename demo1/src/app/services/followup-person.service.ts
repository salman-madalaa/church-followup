import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FollowUpPerson } from '../followUpPersons/followupPerson';

@Injectable({
  providedIn: 'root'
})
export class FollowupPersonService {

  constructor(private http:HttpClient) { }


  insertFollowUpPersons(ob:FollowUpPerson)
  {
    let body=JSON.stringify(ob);
    let options = { 
      headers: new HttpHeaders().set('Content-Type', 'application/json')
      };
   return this.http.post("http://localhost:8080/followupPerson/new",body,options);
  }


  updateFollowupPerson(id:number,ob)
  {

    let body=JSON.stringify(ob);
    let options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

    return this.http.put("http://localhost:8080/followupPerson/"+id,body,options); 
  
  }


  deleteFollowUpPerson(id:number)
  {
    return this.http.delete("http://localhost:8080/followupPerson/"+id);
  }



  getAllFollowupPersons()
  {
    return this.http.get<FollowUpPerson>("http://localhost:8080/followupPerson/getall");

  }


  followupData(id:number){
    return this.http.get("http://localhost:8080/user/followupPerson/"+id);
  }

}
