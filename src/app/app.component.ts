import { Component } from '@angular/core';
import { Wishlist } from './Shared/models/wishlist';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items:Wishlist[]=[];
  title = 'wishlist';
}
