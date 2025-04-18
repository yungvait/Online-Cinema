import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,  // <-- Добавить эту строку
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: '../../../scss/header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

}
