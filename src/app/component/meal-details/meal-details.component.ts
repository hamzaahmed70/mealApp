import { Component } from '@angular/core';
import { MealsService } from '../../services/meals.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meal-details',
  imports: [],
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.scss',
})
export class MealDetailsComponent {
  mealDateils: any;
  constructor(
    private mealsService: MealsService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    if (typeof document != 'undefined') {
      this.activatedRoute.paramMap.subscribe((params) => {
        const mealId = params.get('mealId');
        if (mealId) {
          this.mealsService.getMealDetails(mealId).subscribe((res) => {
            this.mealDateils = res.meals[0];
          });
        }
      });
    }
  }
  getIngredients(mealDateils:any):any {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = `strIngredient${i}`;
      const measure = `strMeasure${i}`;
      if (mealDateils[ingredient]) {
        ingredients.push({
          Ingredient: mealDateils[ingredient],
          measure: mealDateils[measure],
        });
      }else{
        return ingredients
      }
    }
  }
}
