export class Ingredient {
    public id: number;
    private counter = 0;
    constructor (public name: string, public amount: number) {
        this.id = this.counter++;
    }
}
