import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-necklaces',
  templateUrl: './necklaces.component.html',
  styleUrls: ['./necklaces.component.scss']
})
export class NecklacesComponent implements OnInit {

  constructor(private api: ApiService) { }

  necklaces: any

  ngOnInit(): void {
    this.api.getNecklaces().subscribe(response => this.necklaces = response)
  }

}
