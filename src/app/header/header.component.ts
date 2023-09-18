import { Component, OnInit } from '@angular/core';
import { CakeService } from '../services/cake.service';
import { CakeOrder } from '../models/cakeorder';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cakeService:CakeService,
    private auth:AuthService,
    private route:RouteService){}

  cake:CakeOrder[] = [];
  cake1:CakeOrder[] = [];

  ngOnInit():void{
    this.cakeService.getAllCakes().subscribe({
      next:data => {
        this.cake = data;
        this.cake1 = data;
      },
      error:err => {
        alert(err);
      }
    });
  }

}
