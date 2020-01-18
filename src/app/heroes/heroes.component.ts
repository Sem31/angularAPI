import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero : Hero[];
  s : Hero;
  a:any;
  constructor(private heroservice : HeroService) {  
  }
  //   id : 1,
  //   name : 'kamlesh',
  // };

  ngOnInit() {
    this.a = this.heroservice.getresult().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }


  select(h : Hero ):any{
    this.s = h;
  }
}

