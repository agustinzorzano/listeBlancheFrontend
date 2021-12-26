import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './../../../services/login.service';
import { EmailService } from './../../../services/email.service';
import { StorageService, Storable } from '../../../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checkoutForm;

  constructor(
    private emailService: EmailService,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    private storageService: StorageService
  ) {
    this.checkoutForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit(): void {
    if (this.storageService.retrieve(Storable.isAuth)) {
      this.router.navigate(['home']);
    }
  }

  //Quand on clique sur le bouton 'se connecter' :
  // - on regarde avec la bdd si le mdp et l'id sont valides
  // - on actualise le baseComponent en conséquence en fonction de la réponse grâce a la fonction connect()
  onSubmit(data) {
    this.checkoutForm.reset();
    this.loginService.login(data).subscribe(
      res => {
        if (res.setCookie) {
          this.router.navigate(['home']);
        }
      },
      _error => alert('Incorrect login or password !')
    );
  }

  goSignUp() {
    this.router.navigate(['create-account']);
  }
}
