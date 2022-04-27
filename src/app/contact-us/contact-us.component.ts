import { Component, OnInit } from '@angular/core';
import { ContactUsRequestModel } from '../_shared/models/contact-us-request.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  contactFormModel: ContactUsRequestModel = {
    email: '',
    message: ''
  }
  constructor() {}

  ngOnInit(): void {
    return;
  }

  hasError(formControl: any): boolean {
    return formControl.invalid && (formControl.dirty || formControl.touched);
  }
}
