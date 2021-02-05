import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  name!: string;
  speed!: number;
  model!: string;
  colors!: Colors;
  options!: string[];
  isEdit: boolean = false;

  addOpt(option: string) {
    this.options.unshift(option);
    return false;
  }

  deleteOpt(option: string) {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] == option) {
        this.options.splice(i, 1);
        break;
      }
    }
  }

  constructor() {
  }

  ngOnInit() {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8';
    this.colors = {
      car: 'Белый',
      salon: 'Черный',
      wheels: 'Серебристый'
    };
    this.options = ['ABS', 'Автопилот', 'Автопаркинг'];
  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }

  carSelect(carName: string) {
    if (carName === 'bmw') {
      this.name = 'BMW';
      this.speed = 280;
      this.model = 'M5';
      this.colors = {
        car: 'Синий',
        salon: 'Белый',
        wheels: 'Серебристый'
      };
      this.options = ['Система трека', 'Круиз контроль'];
    } else if (carName == 'audi') {
      this.name = 'Audi';
      this.speed = 235;
      this.model = 'RS8';
      this.colors = {
        car: 'Белый',
        salon: 'Черный',
        wheels: 'Серебристый'
      };
      this.options = ['ABS', 'Автопилот', 'Авто Паркинг'];
    } else {
      this.name = 'Mercedes';
      this.speed = 180;
      this.model = 'C180';
      this.colors = {
        car: 'Белый',
        salon: 'Черный',
        wheels: 'Серебристый'
      };
      this.options = ['Массаж', 'Просмотр фильмов',
        'Автопилот', 'Авто Паркинг'];
    }
  }
}

interface Colors {
  car: string;
  salon: string;
  wheels: string
}
