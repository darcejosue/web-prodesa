import { Component } from '@angular/core';

@Component({
  selector: 'app-header-option',
  templateUrl: './header-option.component.html',
  styleUrls: ['./header-option.component.css'],
})
export class HeaderOptionComponent {

  navigate(): void {
    const select = document.getElementById('mySelect1');
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
