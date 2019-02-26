import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.modal';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.sass'],
})
export class RecipeBookComponent implements OnInit {

  constructor () { }

  ngOnInit() {
  }

}
