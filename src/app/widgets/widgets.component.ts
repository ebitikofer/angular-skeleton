import { Component, OnInit } from '@angular/core';
import { MultiplyService } from '../multiply.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  multiplier;
  observerMultiplier;
  observerMultiplicand;
  constructor (private route: ActivatedRoute, private service: MultiplyService) { }

  multiplicationProduct;

  ngOnInit() {
    // this.multiplier = this.route.snapshot.params.multiplier;
    this.route.paramMap.subscribe(params => {
      this.observerMultiplier = params.get('multiplier');
      this.observerMultiplicand = params.get('multiplicand');
    });

    this.multiplicationProduct = this.service.multiplyTwoDigits(this.observerMultiplier, this.observerMultiplicand);
  }

}
