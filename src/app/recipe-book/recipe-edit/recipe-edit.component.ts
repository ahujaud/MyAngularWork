import { Recipe } from './../recipe.modal';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.sass']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  editForm: FormGroup;
  ingredients = new FormArray([]);
  @ViewChild('imagePath') image: ElementRef;

  constructor (
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.formInit(this.recipeService.getRecipeById(this.id));
    });
  }

  private formInit(recipe: Recipe): void {
    let recipeName = '';
    let recipeImage = '';
    let recipeDesc = '';
    if (this.editMode) {
      recipeName = recipe.name;
      recipeImage = recipe.imagePath;
      recipeDesc = recipe.description;
      recipe.ingredients.forEach(control => {
        this.AddFormGroup(this.ingredients, control.name, control.amount);
      });
    }
    this.editForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImage, Validators.required),
      'description': new FormControl(recipeDesc, Validators.required),
      'ingredients': this.ingredients,
    });
  }

  getIngredArray(): AbstractControl[] {
    return (this.editForm.get('ingredients') as FormArray).controls;
  }

  deleteIngredient(index: number): void {
    this.getIngredArray().splice(index, 1);
    if (this.editMode) { this.editForm.value.ingredients.splice(index, 1); }
  }

  AddIngredient() {
    this.AddFormGroup(this.ingredients);
  }

  private AddFormGroup(formArray: FormArray, ...propertyValue: Array<any>): void {
    formArray.push(new FormGroup({
      name: new FormControl(propertyValue[0], Validators.required),
      amount: new FormControl(propertyValue[1], Validators.required),
    }));
  }
  SaveForm() {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.editForm.value, this.id);
    } else {
      this.recipeService.AddNewRecipe(this.editForm.value);
    }

    this.router.navigate(['../'], { relativeTo: this.route });
  }

  CancelForm() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
