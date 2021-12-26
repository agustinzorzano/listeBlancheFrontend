import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../../../services/profil.service';
import { Router } from '@angular/router';
import { Storable, StorageService } from '../../../services/storage.service';
import { BaseComponentComponent } from '../../../base-component/base-component.component';

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
  profil: Profil;

  constructor(protected baseComp: BaseComponentComponent,
              protected profilService: ProfilService,
              protected router: Router,
              protected storageService: StorageService) {
    this.profilService.getInfos().subscribe(
      data => {
        this.profil = data;
      },
      error => {
        if (error.status === 401) {
          this.storageService.store(Storable.isAuth, false);
          this.baseComp.connect();
          this.router.navigate(['base']);
        }
        this.profil = { full_name: 'None', email: 'None' };
      }
    );
  }
}
