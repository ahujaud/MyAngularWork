import { Subject } from 'rxjs';
import { ShoppingListService } from '../shared/shopping-list.service';
import { Recipe } from './recipe.modal';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.modal';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    private _recipes: Recipe[] = [
        new Recipe('Test Recipe',
            'this is Test Recipe',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('Hem', 5),
                new Ingredient('onion', 10)
            ])
    ];

    recipeChanged = new Subject<Recipe[]>();

    constructor (private shopService: ShoppingListService) { }

    get recipes() {
        return this._recipes.slice();
    }

    set recipes(recipes: Recipe[]) {
        this._recipes = recipes;
        this.recipeChanged.next(this._recipes.slice());
    }

    getRecipeById(id: number) {
        return this._recipes.find((recp) => recp.id === id);
    }

    AddIngredients(ingredients: Ingredient[]) {
        this.shopService.AddIngredients(ingredients);
    }

    // deleteIngredient(recipeId: number, ingredientId: number) {
    //     this._recipes[recipeId].ingredients.splice(ingredientId, 1);
    // }

    updateRecipe(value: Recipe, index: number) {
        this._recipes[index].name = value.name;
        this._recipes[index].imagePath = value.imagePath;
        this._recipes[index].description = value.description;
        this._recipes[index].ingredients = value.ingredients;

        this.recipeChanged.next(this._recipes.slice());
    }

    AddNewRecipe(value: Recipe) {
        this._recipes.push(
            new Recipe(value.name, value.description, value.imagePath, value.ingredients),
        );
        this.recipeChanged.next(this._recipes.slice());
    }

    deleteRecipe(recipeId: number) {
        this._recipes.splice(recipeId, 1);
        this.recipeChanged.next(this._recipes.slice());
    }

}
