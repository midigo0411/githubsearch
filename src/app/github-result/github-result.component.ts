import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GithubServiceService } from '../github-search.service'
import { User } from '../user'

@Component({
  selector: 'app-github-result',
  templateUrl: './github-result.component.html',
  styleUrls: ['./github-result.component.css']
})
export class GithubResultComponent implements OnInit {
  user: User
  repoDetails = []
  githubServiceService: GithubServiceService;

  constructor(githubServiceService:GithubServiceService) { 
		this.githubServiceService = githubServiceService;
	}
  @Output() toggleBack = new EventEmitter();


  ngOnInit() {
    this.user = this.githubServiceService.user
    this.repoDetails = this.githubServiceService.repoData
  }

}
