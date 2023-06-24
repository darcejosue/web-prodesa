import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  navigate(): void {
    const select = document.getElementById('mySelect');
    select?.addEventListener('change', (e) => {
      const selectedOption = (e.target as HTMLSelectElement).options[
        (e.target as HTMLSelectElement).selectedIndex
      ];
      if (selectedOption.value !== '') {
        window.location.href = selectedOption.value;
        console.log(selectedOption.value);
      }
    });
  }
}
