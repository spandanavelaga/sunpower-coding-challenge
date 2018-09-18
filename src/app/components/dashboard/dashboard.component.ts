import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  oldUserData: any = [];
  displayedColumns: string[] = ['name', 'phone', 'jobtitle', 'company'];
  dataSource = new MatTableDataSource();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  // Routes to Create Entry Component
  gotoCreateEntry() {
    this.router.navigate(['/createEntry']);
  }
}
