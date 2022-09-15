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
  newItemText: string;

  constructor() {}

  ngOnInit() {
    this.products = ['Milk', 'Honey'];
  }

  addNewItem(): void {
    let val: string = this.newItemText;

    if (!val) return;
    else if (this.products.indexOf(val) > -1)
      this.errors = 'Item already in list';
    else {
      this.products.push(val);
      this.newItemText = '';
      this.errors = '';
    }
  } // addNewItem()

  removeItem(index: number): void {
    this.products.splice(index, 1);
  }
}
