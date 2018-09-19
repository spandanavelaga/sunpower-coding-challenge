import {Component, OnInit} from '@angular/core';
import {FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router'
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-create-entry',
  styleUrls: ['create-entry.component.css'],
  templateUrl: 'create-entry.component.html',
})
export class CreateEntryComponent implements OnInit {
  createEntryForm: any;
  createEntry : any = {
    name : '',
    phone : '',
    jobtitle: '',
    company : ''
  };
  nameFormControl = new FormControl('', [Validators.required]);
  jobtitleFormControl = new FormControl('', [Validators.required]);
  companyFormControl = new FormControl('', [Validators.required]);
  phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/(\(?[0-9]{3}\)?-?\s?[0-9]{3}-?[0-9]{4})/)
  ]);
  oldUserData : any = [];
  
  constructor(
    public fb: FormBuilder,
    private storageService: StorageService,
    private router: Router
  ) {
    this.createEntryForm = fb.group({
      name: this.nameFormControl,
      jobtitle: this.jobtitleFormControl,
      company: this.companyFormControl,
      phone: this.phoneFormControl
    });
    this.storageService.getData('userData')
    .then((data)=> {
      if(!data) {
        this.oldUserData = [];
      }else {
        this.oldUserData = data;
      }
    });
  }

  ngOnInit() {
  }

  getPhoneErrorMessage() {
    return this.phoneFormControl.hasError('required') ? 'You must enter a value' :
      this.phoneFormControl.hasError('pattern') ? 'Format must be (xxx) xxx-xxxx' : '';
  }

  getRequiredErrorMessage(field) {
    return this.createEntryForm.get(field).hasError('required') ? 'You must enter a value' : '';
  }

  gotoDashboard() {
    this.router.navigate(['/dashboard']);
  }

  submit() {
    this.oldUserData.push(this.createEntry);
    this.storageService.setData('userData', this.oldUserData);
    this.gotoDashboard();
  }

}
