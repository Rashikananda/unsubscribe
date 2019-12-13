import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular 4';
  email= 'rasikanandapattanaik@gmail.com'
  constructor(private route: ActivatedRoute) {

  }
    ngOnInit() {
      this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}

        this.email = params.email;
        console.log(this.email); // popular
      });
  }
}
