import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductViewComponent } from './product-view/product-view.component';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  view():void{
    const dialogRef = this.dialog.open(ProductViewComponent, {
     height:'700px',
    
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
