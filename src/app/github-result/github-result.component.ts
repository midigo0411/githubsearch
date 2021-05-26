import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-search.service'
import { User } from '../user'
@Component({
  selector: 'app-github-result',
  templateUrl: './github-result.component.html',
  styleUrls: ['./github-result.component.css']
})
export class GithubResultComponent implements OnInit {
  user: User;
  repoDetails = []
  GithubServiceService: GithubServiceService;

  constructor(GithubServiceService:GithubServiceService) { 
		this.GithubServiceService = GithubServiceService;
	}


  ngOnInit() {
    this.user = this.GithubServiceService.user
    this.repoDetails = this.GithubServiceService.repoData
  }

}
