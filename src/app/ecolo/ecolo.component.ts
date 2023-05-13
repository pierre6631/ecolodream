import { Component } from '@angular/core';
import { ICategory } from './category/icategory';
import { CategoryService } from './category/services/category.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-ecolo',
  templateUrl: './ecolo.component.html',
  styleUrls: ['./ecolo.component.scss']
})
export class EcoloComponent {

  categories: ICategory[] = [];

  constructor(private categoryService: CategoryService,private spinner: NgxSpinnerService) {}

   ngOnInit() {
    this.spinner.show();
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        this.spinner.hide();
      },
      error : (error) => {
        console.log(error);
      }
   });
  }
}
