import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  quantiy =1;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  increment(){
    this.quantiy = this.quantiy +1;
  }
  decrement(){
    if(this.quantiy == 1)
    {

    }
    if(this.quantiy != 1)
    {
      this.quantiy = this.quantiy -1;

    }
  }
  checkout(){
    this.router.navigate(['/checkout'])
  }
}
