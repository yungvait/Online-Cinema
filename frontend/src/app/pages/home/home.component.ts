import { Component, OnInit } from '@angular/core'; // базовые декораторы Angular для создания компонентовб 
// OnInit — интерфейс для метода ngOnInit(), который вызывается при инициализации компонента.
import { ApiService } from '../../services/api.service'  // ApiService - наш кастомный сервис для работы с API
import { HomeData } from '../../interfaces/home-data.model' // HomeData - интерфейс для типизации данных
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { MovieCategoryComponent } from '../../components/movie-category/movie-category.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    MovieCategoryComponent,
    FooterComponent,
    CommonModule, // Добавляем CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: '../../../scss/home.component.scss'
})
export class HomeComponent implements OnInit {
  data: HomeData | null = null //Хранит данные для отображения на странице. Начальное значение — null, так как данные ещё не загружены.
  isLoading = true // Флаг загрузки. Если true, можно показать индикатор загрузки (например, спиннер).

  constructor(private apiService: ApiService){} //Angular автоматически создаёт экземпляр ApiService и передаёт его в компонент.

  // ngOnInit(): Метод жизненного цикла компонента, который запускает загрузку данных. Вызывается сразу после создания компонента.
  ngOnInit(): void {
    this.apiService.getHomeData().subscribe({
      next: (response) => {
        this.data = response;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Ошибка при получении данных:', err);
        this.isLoading = false;
      }
    })
  }
}
// Работа с сервисом:
//   this.apiService.getHomeData() — вызов метода сервиса, который возвращает Observable<HomeData>.
//   .subscribe({...}) — подписка на результат.
//     next — обработка успешного ответа.
//     error — обработка ошибки.

// Логика:
//   При успешном ответе:
//     this.data = response — сохраняем данные.
//     this.isLoading = false — скрываем индикатор загрузки.
//   При ошибке:
//     Логируем ошибку в консоль.
//     this.isLoading = false — всё равно скрываем индикатор.