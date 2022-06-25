import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-bracelets',
  templateUrl: './bracelets.component.html',
  styleUrls: ['./bracelets.component.scss']
})
export class BraceletsComponent implements OnInit {

  constructor(private api: ApiService) { }

  bracelets: any

  ngOnInit(): void {
    this.api.getBracelets().subscribe(response => this.bracelets = response)
  }

}
