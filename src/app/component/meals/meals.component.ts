import { Component } from '@angular/core';
import { MealsService } from '../../services/meals.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meals',
  imports: [RouterLink,RouterLinkActive,CommonModule ],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss',
})
export class MealsComponent {
  categorie: any;
  meals: any;
  constructor(
    private mealsService: MealsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    if (typeof document != 'undefined') {
      this.mealsService.getAllCategories().subscribe((res) => {
        this.categorie = res.meals;
      });
      
      this.activatedRoute.paramMap.subscribe((params) => {
        const categoryName = params.get('categoryName')
        if(categoryName){
          this.mealsService.getAllMealsByCategory(categoryName).subscribe((res) => {
            this.meals = res.meals;
          });
        }
        
      });
    }
  }
  navigateToCategory(event: Event) {
    const selectedCategory = (event.target as HTMLSelectElement).value;
    if (selectedCategory === 'all') {
      this.router.navigate(['/category/all']);
    } else {
      this.router.navigate(['/category', selectedCategory]);
    }
  }
}
