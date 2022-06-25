import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-rings',
  templateUrl: './rings.component.html',
  styleUrls: ['./rings.component.scss']
})
export class RingsComponent implements OnInit {

  constructor(private api: ApiService) { }

  rings: any

  ngOnInit(): void {
    this.api.getRings().subscribe(response => this.rings = response)
  }

}
