import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeData } from '../../interfaces/home-data.model';
// hero.component.ts
import { HeroData } from '../../interfaces/hero_data.model';
@Component({
  standalone: true,  // <-- Добавить эту строку
  selector: 'app-hero',
  imports: [CommonModule], // <-- Добавить,
  templateUrl: './hero.component.html',
  styleUrl: '../../../scss/hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class HeroComponent {
  @Input() data!: HeroData; // Теперь data типизирована
}
