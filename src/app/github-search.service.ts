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
  newUserData: any = [];

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
    
    let promise = new Promise ((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/" + username).toPromise().then(response=>{
        this.user.bio = response.bio;
        this.user.public_repos = response.public_repos; 
        this.user.login = response.login; 
        this.user.avatar_url = response.avatar_url; 
        this.user.created_at = response.created_at;

        resolve()
      },
      error=>{
        reject(error)
      
      })
      this.http.get<any>("https://api.github.com/users/" + username + "/repos").toPromise().then(response=>{
        for(var i=0; i<response.length; i++)
          this.newUserData = new Repository(response[1].name, response[1].description, response[1].updated_at, response[1].clone_url, response[1].language){
            this.repoData.push(this.newUserData);
        }
        resolve()
    },
    error=>{
      reject(error)
    
    })

  })
  return promise;
}
}