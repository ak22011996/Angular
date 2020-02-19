import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.module';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('A test Recipe','This is test','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vegetarian-recipe-spinach-pita-pizza-1567097013.jpg?crop=1.00xw:0.334xh;0,0.305xh&resize=980:*')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
