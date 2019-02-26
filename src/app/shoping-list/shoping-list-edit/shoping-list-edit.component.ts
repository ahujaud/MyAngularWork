import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../../shared/shopping-list.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.modal';

@Component({
  selector: 'app-shoping-list-edit',
  templateUrl: './shoping-list-edit.component.html',
  styleUrls: ['./shoping-list-edit.component.sass']
})
export class ShopingListEditComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  editMode = false;
  index: number;
  constructor (private shopService: ShoppingListService) { }

  ngOnInit() {

    this.shopService.ingredientEdited.subscribe((ingredient: Ingredient) => {
      this.form.setValue({
        ingredientName: ingredient.name,
        ingredientAmount: ingredient.amount,
      });
      this.index = ingredient.id;
      this.editMode = true;
    });
  }

  OnSubmit() {
    // event.preventDefault();
    const name = this.form.value.ingredientName;
    const amount = this.form.value.ingredientAmount;
    const ingredient = new Ingredient(name, amount);
    if (!this.editMode) {
      this.shopService.AddIngredient(ingredient);
    } else {
      this.shopService.editIngredient(ingredient);
    }

    this.ClearForm();
  }

  ClearForm() {
    this.form.reset();
    this.editMode = false;
  }
  DeleteIngredient() {
    this.shopService.deleteIngredient(this.index);

    this.ClearForm();
  }
}
