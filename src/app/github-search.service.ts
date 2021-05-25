import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { User } from './user';
import { Repository } from './repository';
@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {
  user: User;
  repository: Repository;
  repoData = [];

  constructor(private http: HttpClientModule) { 
    this.user = new User("", 0, "", "", new Date)
    this.repository= new Repository("", "", new Date(), "", "");
  }
}
