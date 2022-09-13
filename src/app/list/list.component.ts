import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  products: string[];
  errors: string;
  newItem: HTMLInputElement;

  constructor() {}

  ngOnInit() {
    this.products = ['Milk', 'Honey'];
  }

  addNewItem(el:HTMLInputElement): void {
    
    let val: string = el.value;

    if (!val) return;
    else if (this.products.indexOf(val) > -1)
      this.errors = 'Item already in list';
    else {
      this.products.push(val);
      el.value = '';
      this.errors = '';
    }
  } // addNewItem()

  removeItem(index: number): void {
    this.products.splice(index, 1);
  }
}
