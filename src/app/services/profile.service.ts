import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


private username: string;
private clientid : '191838';
private clientsecret: 'Iv1.0ae2112d17af1230';

  constructor(private http:HttpClient) {
    console.log("service is ready");
    this.username='mishobo';
   }

   getProfileInfor(){
     return this.http.get("https://api.github.com/users/"+this.username + "?client_id=" + 
     this.clientid + "&client_secret=" + this.clientsecret);
   }

   getProfileRepos(){
  	return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + 
    "&client_secret=" + this.clientsecret);
  }

  updateProfile(username:string){
  	this.username = username;
  }

}
