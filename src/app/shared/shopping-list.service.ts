import { Ingredient } from 'src/app/shared/ingredients.modal';
import { Subject } from 'rxjs';

export class ShoppingListService {

    private _ingredients: Ingredient[] = [
        new Ingredient('Apples', 10),
        new Ingredient('tomatoes', 5)
    ];
    get ingredients() {
        return this._ingredients.slice();
    }

    ingredientChanged = new Subject<Ingredient[]>();
    ingredientEdited = new Subject<Ingredient>();

    AddIngredient(ingredient: Ingredient) {
        this._ingredients.push(ingredient);
        this.ingredientChanged.next(this._ingredients.slice());
    }

    AddIngredients(ingredients_new: Ingredient[]) {
        this._ingredients.push(...ingredients_new);
        this.ingredientChanged.next(this._ingredients.slice());
    }

    editIngredient(ingredient: Ingredient) {
        this._ingredients[ingredient.id].name = ingredient.name;
        this._ingredients[ingredient.id].amount = ingredient.amount;
        this.ingredientChanged.next(this._ingredients.slice());
    }

    deleteIngredient(index: number) {
        this._ingredients.splice(index, 1);
        this.ingredientChanged.next(this._ingredients.slice());
    }
}
