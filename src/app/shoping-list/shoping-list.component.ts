import { ShoppingListService } from '../shared/shopping-list.service';
import { Ingredient } from './../shared/ingredients.modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.sass']
})
export class ShopingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor (private shopService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopService.ingredients;
    this.shopService
      .ingredientChanged
      .subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients);
  }

  OnEditIngredient(ingredient: Ingredient) {
    this.shopService.ingredientEdited.next(ingredient);

  }


}
