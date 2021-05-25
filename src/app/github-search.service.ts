import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { User } from './user';
import { Repository } from './repository';
import { getMissingNgModuleMetadataErrorData } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {
  user: User;
  repository: Repository;
  repoData = [];

  constructor(private http: HttpClientModule) { 
    this.user = new User("", 0, "", "", new Date());
    this.repository= new Repository("", "", new Date(), "", "");
    
  }
  getUserData(username: string){
    interface ApiResponse{
      bio:string,
      public_repos: number, 
      login: string, 
      avatar_url: string,
      created_at: Date
    
    }
  }
}
