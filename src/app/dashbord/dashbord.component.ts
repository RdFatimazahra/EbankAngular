import { Component } from '@angular/core';
import { JwtService } from '../service/jwt.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  constructor(
    private service:JwtService
  ){ }
  ngOnInit() {
    this.demo();

  }
  demo(){
    this.service.demo().subscribe(
      (response) => {
        console.log(response);
      }
    )
  }
}
