import { Component } from '@angular/core';
import { ICategory } from './icategory';
import { CategoryService } from './services/category.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { IChallenge } from './challenge/ichallenge';
import { ChallengeService } from './challenge/services/challenge.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  categoryId: number;
  category: ICategory;
  challenges: IChallenge[];

  constructor(
    private categoryService: CategoryService,
    private spinner: NgxSpinnerService, 
    private router: Router, 
    private route: ActivatedRoute, 
    private challengeService: ChallengeService
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.route.params.subscribe(params => {
      this.categoryId = +params['id'];
    });
    this.categoryService.getCategory(this.categoryId).subscribe({
      next: (category) => {
        this.category = category;
        this.challengeService.getChallenges(this.categoryId).subscribe({
          next: (challenges) => {
            this.challenges = challenges;
            this.spinner.hide();
          },
          error : (error) => {
            console.log(error);
          }
       });
      },
      error : (error) => {
        this.spinner.hide();
        console.log(error);
      }
   });
  }

  goChallenge(id: number){
    this.router.navigate(['ecolo/categories/'+this.categoryId + "/challenges/" + id]);
  }

}
