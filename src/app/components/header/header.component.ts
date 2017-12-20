import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from './../../services/shared-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sharedService: SharedServiceService) { }

  ngOnInit() {
  }

}
