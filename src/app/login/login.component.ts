import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutentificationService } from '../servicios/autentification.service';

import Swal from 'sweetalert2';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  error: String = "";

  constructor( private formBuilder: FormBuilder,
    private autentificationService: AutentificationService,
    private route: Router) {
      this.form = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
      });
     }

  ngOnInit(): void {
  }

  get Password() {
    return this.form.get('password');
  }
  get Email() {
    return this.form.get('email');
  }

  onSubmit(event: Event) {
    event.preventDefault;
    this.autentificationService.iniciarSesion(this.form.value).subscribe(
      (data) => {
        console.log(JSON.stringify('data' + data));
        sessionStorage.setItem('token', data.token)
        this.route.navigate(['/menu', /* { id: data.id } */]);
      },
      (err) => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: JSON.stringify(err.error),
          showConfirmButton: false,
          timer: 1500
        })
        console.log(err);
        this.error = err;
      }
    );
  }

}
