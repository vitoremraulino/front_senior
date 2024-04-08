import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { hospedeservices } from '../../services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private hs: hospedeservices,
  ) { 

  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          nome: ['', Validators.required],
          documento: ['', Validators.required],
          telefone: ['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      console.log('alo');
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {          
          console.log('invalido');
          return;
      }

      this.loading = true;
      this.hs.register(this.registerForm.value)
          .pipe(first())
          .subscribe(
              data => {
                  alert('Registro salvo!;')
                  this.router.navigate(['/checkin']);
              },
              error => {
                  alert(error.message);
                  this.loading = false;
              });
  }
}