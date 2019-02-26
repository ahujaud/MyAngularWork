import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipe-book/recipe.service';
import { map } from 'rxjs/operators';
import { Recipe } from '../recipe-book/recipe.modal';

@Injectable({
    providedIn: 'root',
})
export class RecipeDataService {

    constructor (private http: HttpClient, private recipe: RecipeService, private auth: AuthService) { }

    public saveRecipeData() {
        return this.http.put<Recipe[]>('https://food-cart-a6706.firebaseio.com/recipes.json', this.recipe.recipes, {
            params: new HttpParams().set('auth', this.auth.token)
        });
    }

    public getRecipeData() {
        this.http.get<Recipe[]>('https://food-cart-a6706.firebaseio.com/recipes.json', {
            params: new HttpParams().set('auth', this.auth.token),
        })
            .pipe(map((recipes) => {
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
