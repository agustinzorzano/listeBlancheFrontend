import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from './../../../services/login.service';
import { BaseComponentComponent } from './../../../base-component/base-component.component';
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
    baseComp: BaseComponentComponent,
    profilService: ProfilService,
    router: Router,
    storageService: StorageService
  ) {
    super(baseComp, profilService, router, storageService);
  }

  ngOnInit() {}

  onGoToLogin() {
    this.storageService.store(Storable.isAuth, false);
    this.baseComp.connect();
    this.router.navigate(['base']);
  }
}
