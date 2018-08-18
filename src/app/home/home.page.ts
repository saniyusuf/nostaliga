import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  foodList: Observable<any>;

  constructor(http: HttpClient){
    this.foodList =
        http.get('./assets/food.json');
  }

}
