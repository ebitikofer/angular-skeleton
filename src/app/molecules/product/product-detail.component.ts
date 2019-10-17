import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  observerID;

  constructor (private route: ActivatedRoute) { }

  ngOnInit() {
    // this.multiplier = this.route.snapshot.params.multiplier;
    this.route.paramMap.subscribe(params => {
      this.observerID = params.get('id');
    });
  }

}
