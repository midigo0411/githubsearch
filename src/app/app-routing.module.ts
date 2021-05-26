import { GithubResultComponent } from './github-result/github-result.component';
import { GitFormComponent } from './git-form/git-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "gitForm", component: GitFormComponent},
  {path: "githubResult", component: GithubResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
