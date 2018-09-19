import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  oldUserData: any = [];
  displayedColumns: string[] = ['name', 'phone', 'jobtitle', 'company'];
  dataSource = new MatTableDataSource(this.oldUserData);

  constructor(
    private router : Router,
    private storageService: StorageService) {

    this.storageService.getData('userData')
    .then((data)=> {
      if(!data) {
        this.oldUserData = [];
        this.dataSource = new MatTableDataSource(this.oldUserData);
      }else {
        this.oldUserData = data;
        this.dataSource = new MatTableDataSource(this.oldUserData);
      }
    });
  }

  ngOnInit() {
  }

  // Routes to Create Entry Component
  gotoCreateEntry() {
    this.router.navigate(['/createEntry']);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
