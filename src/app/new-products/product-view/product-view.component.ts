import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  quantity = 1;

  constructor() { }

  ngOnInit() {
  }
  next(){
    this.quantity += 1;
  }
  prev(){
    if(this.quantity == 1){

    }
    else if(this.quantity != 1){
      this.quantity -= 1;
    }
   
  }
}
