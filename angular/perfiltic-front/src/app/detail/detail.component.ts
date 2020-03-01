import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() productInfo : Product;

  constructor() { }

  ngOnInit(): void {
  }

}

class Product {
  public id : Number;
  public weigth : Number;
  public price : Number;
  public name : String;
  public description : String;
}