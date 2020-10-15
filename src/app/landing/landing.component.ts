import { Component, OnInit } from '@angular/core';
import { GithubfetcherService } from "../services/githubfetcher.service"

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [GithubfetcherService]
})
export class LandingComponent {
  user: any;
  username: string;
  repos: any[];

  constructor(private githubService: GithubfetcherService) {}

  ngOnInit() {
    this.githubService.getUser().subscribe(res => {
      
      this.user = res;
      
    })

    this.githubService.getRepos().subscribe(res => {
      this.repos = res;
      
    })
  }

}
