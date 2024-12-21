import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { CategoryService } from '../service/category.service';
import {MatListModule} from '@angular/material/list';

import {MatDividerModule} from '@angular/material/divider';

//cards
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

//chips
import {MatChipsModule} from '@angular/material/chips';



@Component({
  selector: 'app-category',
  imports: [
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{


  //arreglo
  categories: Category[] = [];

  //
  constructor(private service:CategoryService){

  }
  ngOnInit(): void {
    this.service.getAll().subscribe(response => this.categories = response.data);
  }





}
