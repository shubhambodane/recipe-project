import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Biryani',
      'Chicken Biryani',
      'https://static.toiimg.com/thumb/53096628.cms?width=1200&height=900'
    ),
    new Recipe(
      'Biryani',
      'Chicken Biryani',
      'https://static.toiimg.com/thumb/53096628.cms?width=1200&height=900'
    ),
  ];
}
