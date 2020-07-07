import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidatorService} from '../services/custom-validator.service';

@Component({
  selector: 'app-login-builder',
  templateUrl: './login-builder.component.html',
  styleUrls: ['./login-builder.component.css']
})
export class LoginBuilderComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private validator: CustomValidatorService) {
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.email]],
      password: ['', [Validators.minLength(6)]]
    }, {validators: [Validators.required]});
  }

}
