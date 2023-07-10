import { formatDate } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent {
  date : Date = new Date();
  particle = this.date.getMonth()+1;
 change() {
     if (this.particle == 12) {
       return '';
    } else {
      return 'none';
    }
  }
}
