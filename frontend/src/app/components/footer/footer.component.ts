import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,  // <-- Добавить эту строку
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: '../../../scss/footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

}
