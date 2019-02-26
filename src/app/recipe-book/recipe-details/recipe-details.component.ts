import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.sass']
})
export class RecipeDetailsComponent implements OnInit {
  detailRecipe: Recipe;
  id: string;

  constructor (private recipeService: RecipeService, private route: ActivatedRoute, private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.detailRecipe = this.recipeService.getRecipeById(+this.id);
    });

    this.recipeService.recipeChanged.subscribe((recipes: Recipe[]) => {
      this.detailRecipe = recipes[+this.id];
    });
  }

  AddIngredients() {
    // event.stopPropagation();
    this.recipeService.AddIngredients(this.detailRecipe.ingredients);
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  deleteRecipe() {
    if (this.auth.authenticateUser()) {
      this.recipeService.deleteRecipe(+this.id);
      this.router.navigate(['../'], { relativeTo: this.route });
    } else {
      this.router.navigate(['/login']);
    }
  }

}
