import { Ingredient } from '../shared/ingredients.modal';

export class Recipe {
    public id: number;
    private counter = 0;
    constructor (
        public name: string,
        public description: string,
        public imagePath: string,
        public ingredients: Ingredient[]
    ) {
        this.id = this.counter++;
    }
}
