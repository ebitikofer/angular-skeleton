import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor (/* private ngForm: NgForm */) { }

  ngForm: NgForm;

  // private product: Product;
  product: Product;

  ngOnInit() {

    this.product = new Product({
      id: '', name: '', barcode: '', price: ''
    });

  }

}
