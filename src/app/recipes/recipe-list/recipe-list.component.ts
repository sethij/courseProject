import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
	new Recipe('Test Recipe','This is test','http://del.h-cdn.co/assets/16/36/980x490/landscape-1473392204-chorizo-bolognese-pastal1.jpg'),
	new Recipe('Test Recipe','This is test','http://del.h-cdn.co/assets/16/36/980x490/landscape-1473392204-chorizo-bolognese-pastal1.jpg')
];
  constructor() { }

  ngOnInit() {
  }

}
