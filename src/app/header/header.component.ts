import { Component, OnInit } from '@angular/core';
import { RecipeDataService } from '../shared/Recipe-data.service';
import { AuthService } from '../shared/auth.service';
import { Recipe } from '../recipe-book/recipe.modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor (private recipeData: RecipeDataService, private auth: AuthService) { }

  ngOnInit() {

  }

  onSaveData() {
    this.recipeData.saveRecipeData().subscribe((response: Recipe[]) => {
      console.log(response);
    });
  }

  onFetchData() {
    this.recipeData.getRecipeData();
  }

  onLogout() {
    this.auth.logout();
  }

  authenticateUser() {
    return this.auth.authenticateUser();
  }

}
