import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipe-book/recipe.service';
import { map } from 'rxjs/operators';
import { Recipe } from '../recipe-book/recipe.modal';

@Injectable({
    providedIn: 'root',
})
export class RecipeDataService {
    constructor (private http: Http, private recipe: RecipeService) { }
    public saveRecipeData() {
        return this.http.put('https://food-cart-a6706.firebaseio.com/recipes.json', this.recipe.recipes);
    }

    public getRecipeData() {
        this.http.get('https://food-cart-a6706.firebaseio.com/recipes.json')
            .pipe(map((response: Response) => {
                const recipes = response.json();
                return recipes.map((recipe: Recipe) => {
                    if (recipes['ingredients'] === null) {
                        recipe['ingredients'] = [];
                    }
                    return recipe;
                });
            }))
            .subscribe((response: Recipe[]) => this.recipe.recipes = response);
    }
}
