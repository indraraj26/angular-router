import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent {
    public loginForm: FormGroup;
    constructor(public formBuilder: FormBuilder,
        public loginService: LoginService,
        public authenticationService: AuthenticationService,
        public router: Router) {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        console.log(this.loginForm.value);
        if (!this.loginForm.valid) {
            return false;
        }
        this.loginService.login(this.loginForm.value).subscribe((data: any) => {
            if (data && data.token) {
                this.authenticationService.saveToken(data.token);
                this.router.navigateByUrl('/customer-details');
            }
        });
    }
}
