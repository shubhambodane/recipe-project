import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Fries',
      'French fries, chips, finger chips, french-fried potatoes, or simply fries are batonnet or allumette-cut deep-fried potatoes of disputed origin from Belgium or France. They are prepared by cutting potatoes into even strips, drying them, and frying them, usually in a deep fryer.',
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/tymxoebovdlkmrpfxglq',
      [new Ingredient('Potatoes', 5), new Ingredient('Oil', 1)]
    ),
    new Recipe(
      'Chicken Biryani',
      'Biryani is a mixed rice dish most popular in South Asia and was thought to have originated from ancient Iran. It is made with rice, some type of meat and spices. To cater to vegetarians, in some cases, it is prepared by substituting vegetables for the meat. Sometimes eggs and/or potatoes are added.',
      'https://static.toiimg.com/thumb/53096628.cms?width=1200&height=900',
      [new Ingredient('Chicken', 2), new Ingredient('Basmati Rice', 1)]
    ),
    new Recipe(
      'Momo',
      'Momos are a type of steamed filled dumpling in Tibetan and Nepali cuisine that is also popular in neighbouring Bhutan and India. Momos are usually served with a sauce known as achar influenced by the spices and herbs used within many South Asian cuisines. ',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/330px-Momo_nepal.jpg',
      [new Ingredient('Flour', 1), new Ingredient('Paneer', 6)]
    ),
  ];

  public recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
