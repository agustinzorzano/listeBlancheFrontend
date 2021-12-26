import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../../../services/profil.service';
import { Router } from '@angular/router';
import { Storable, StorageService } from '../../../services/storage.service';

interface Profil {
  full_name: string;
  email: string;
}

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent {
  public profil: Profil;

  constructor(protected profilService: ProfilService,
              protected router: Router,
              protected storageService: StorageService) {
    this.profil = { full_name: 'None', email: 'None' };
    this.profilService.getInfos().subscribe(
      data => {
        this.profil = data;
      },
      error => {
        if (error.status === 401) {
          this.storageService.store(Storable.isAuth, false);
          this.router.navigate(['login']);
        }
      }
    );
  }
}
