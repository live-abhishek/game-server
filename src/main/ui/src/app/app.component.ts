import { Component, OnInit } from '@angular/core';
import { PetService } from './pet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private petService: PetService) {

  }

  pets = [];

  ngOnInit() {
    this.petService.getPets().subscribe(reponsePets => this.pets = reponsePets);
  }
}
