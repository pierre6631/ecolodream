import { Component } from '@angular/core';
import { ICategory } from './category/icategory';
import { CategoryService } from './category/services/category.service';

@Component({
  selector: 'app-ecolo',
  templateUrl: './ecolo.component.html',
  styleUrls: ['./ecolo.component.scss']
})
export class EcoloComponent {

  categories: ICategory[] = [];

  constructor(private categoryService: CategoryService,) {}

   ngOnInit() {
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error : (error) => {
        console.log(error);
      }
   });
  }
}
