import { Component, OnInit } from '@angular/core';
import { AppRoutes } from '../routes/app-routes'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public get appRoutes(): typeof AppRoutes {
		return AppRoutes;
	}
}
