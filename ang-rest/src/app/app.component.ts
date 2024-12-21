import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryComponent } from './category/category.component';


@Component({
  selector: 'app-root',
  imports: [CategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang-rest';
}
