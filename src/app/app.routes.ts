import { Routes } from '@angular/router';
import { MeallayoutComponent } from './components/meallayout/meallayout.component';
import { MealsComponent } from './component/meals/meals.component';
import { MealDetailsComponent } from './component/meal-details/meal-details.component';

export const routes: Routes = [
  {
    path: '',
    component: MeallayoutComponent,
    children: [
      
        {path:'',redirectTo:'category/all',pathMatch:'full'},
        { path: 'category/:categoryName', component: MealsComponent},
        {path:'mealdetails/:mealId',component:MealDetailsComponent}
    ],
  },
  
];

