import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class GithubfetcherService {
  private username: string;
  private clientId = '817a06fbae6df8930a7b';
  private clientSecret = '290b206f4eeaf8b775563e2a8c59c26ff76a6b35';

  url = 'https://api.github.com/users/';

   constructor(private http: Http) {

    this.username = 'andyweru';

  }

    private handleError(error: any) {
     if (error.status === 401) {
      return Observable.throw(error.status);
    } else {
      return Observable.throw(error.status || 'Server error');
    }
  }	  


  getUser() {
    if(this.username) {
      return this.http.get(this.url + this.username +  '?client_id=' + this.clientId  + '&client_secret=' + this.clientSecret)
        .map((res) => res.json())
        .catch(this.handleError);
    }
  }

  getRepos() {
    if(this.username) {
      return this.http.get(this.url + this.username + '/repos?client_id=' + this.clientId + '&client_secret=' + this.clientSecret)
        .map((res) => res.json())
        .catch(this.handleError);
    }	
  }
  	  
   updateUser(username: string) {
    this.username = username;
  }
 }