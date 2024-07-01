import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

form: FormGroup = new FormGroup({
  username: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required),
});
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ){

}
login() {
  const user = this.authService.login(this.form.value.username, this.form.value.password,true)
if(!user){
  
  this.toastr.warning('Wrong Credential')
} else {

  this.router.navigateByUrl('/admin');
  this.toastr.success('Log in successfully')
}
}
}
