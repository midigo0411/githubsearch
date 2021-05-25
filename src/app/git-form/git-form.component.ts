import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-search.service'
import { User } from '../user';
@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {
  
  user:User;
	username: string; 
	GithubServiceService:GithubServiceService;  
  public showInput = true;
  public showData = false;

  submitUsername() {
		this.GithubServiceService.getUserData(this.username);
    this.showInput = false;
    this.showData = true;
	}

  showUserInput(hideInput) {
    this.showInput = hideInput;
    this.showData = false;
  }

  
	constructor(GithubServiceService:GithubServiceService) { 
		this.GithubServiceService = GithubServiceService;
	}


  ngOnInit(): void {
  }

}
