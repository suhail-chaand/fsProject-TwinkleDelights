import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-earrings',
  templateUrl: './earrings.component.html',
  styleUrls: ['./earrings.component.scss']
})
export class EarringsComponent implements OnInit {

  constructor(private api: ApiService) { }

  earrings: any

  ngOnInit(): void {
    this.api.getEarrings().subscribe(response => this.earrings = response)
  }
}