import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from './../../../services/login.service';
import { ProfilService } from './../../../services/profil.service';
import { Storable, StorageService } from './../../../services/storage.service';
import { AuthComponentComponent } from '../auth-component/auth-component.component';

interface Profil {
  full_name: string;
  email: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends AuthComponentComponent implements OnInit {
  // profil: Profil;
  full_name: string;
  email: string;

  constructor(
    private loginService: LoginService,
    profilService: ProfilService,
    router: Router,
    storageService: StorageService
  ) {
    super(profilService, router, storageService);
  }

  ngOnInit() {}

  onGoToLogin() {
    this.loginService.logout().subscribe(v => {
      this.storageService.store(Storable.isAuth, false);
      this.router.navigate(['login']);
    });
  }
}
