import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';


@Component({
  selector: 'inf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  selectedItem!: MenuItem;
  subscriptionRoute!: Subscription;

  constructor (private router: Router) {}

  ngOnInit(): void { }

  ngOnDestroy() {
    this.subscriptionRoute?.unsubscribe();
  }
}
