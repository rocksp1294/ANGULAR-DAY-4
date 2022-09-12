import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CareerService } from 'src/app/services/career.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  constructor(private router: Router,private careerService: CareerService) { }

  ngOnInit(): void {
  }

  showCareer(){
    this.router.navigate(['careers']);
  }
}
