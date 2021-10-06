import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private authSvs: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onLogin() {
    try {
      const { email, password } = this.loginForm.value
      const user = await this.authSvs.login(email, password)
      if(user){
        //Redirect to home page
        this.router.navigate(['/home'])
      }
    } catch (error) {
      return console.log(error)
    }
  }

}
