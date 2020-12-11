import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auhtServices: AuthService,
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  login(even: Event){

    even.preventDefault();

    if(this.form.valid){
      const value = this.form.value;
      this.auhtServices.login(value.email, value.password)
      .then(()=> {
        this.router.navigate(['/admin']);
      })
      .catch(() => {
        alert('el usuaio no es válido');
      })
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

}
