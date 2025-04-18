import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Movie {
  id: number;
  title: string;
  genre: string;
  poster: string;
}

@Component({
  standalone: true,  // <-- Добавить эту строку
  selector: 'app-movie-category',
  templateUrl: './movie-category.component.html',
  styleUrl: '../../../scss/movie-category.component.scss',
  imports: [CommonModule]
})
export class MovieCategoryComponent {
  @Input() title: string = '';
  @Input() movies: Movie[] = []; // Инициализируйте пустым массивом
}
