import { Component, OnInit } from '@angular/core';
import { ProfilService } from './../../../services/profil.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthComponentComponent } from '../auth-component/auth-component.component';
import { StorageService } from '../../../services/storage.service';
import { BaseComponentComponent } from '../../../base-component/base-component.component';


interface Profil {
  full_name: string;
  //mdp : string
  email: string;
}

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent extends AuthComponentComponent implements OnInit {
  // profil: Profil;
  nameForm;
  emailForm;
  passwordForm;
  emailPasswordForm;

  constructor(
    baseComp: BaseComponentComponent,
    profilService: ProfilService,
    router: Router,
    storageService: StorageService,
    private formBuilder: FormBuilder
  ) {
    super(baseComp, profilService, router, storageService);
    this.nameForm = this.formBuilder.group({
      nameitem: ''
    });
    this.emailForm = this.formBuilder.group({
      emailitem: ''
    });
    this.emailPasswordForm = this.formBuilder.group({
      emailpassworditem: ''
    });
    this.passwordForm = this.formBuilder.group({
      passworditem: ''
    });
  }

  ngOnInit() {}

  onSubmitName(data) {
    this.profilService.putName(data.nameitem).subscribe(
      _result => location.reload(),
      _error => alert('Erreur du serveur.')
    );
  }

  onSubmitEmail(data) {
    this.profilService.putEmail(data.emailitem).subscribe(
      _result => location.reload(),
      _error => alert('Erreur du serveur.')
    );
  }

  onSubmitPassword(data) {
    this.profilService.putPassword(data.passworditem).subscribe(
      _result => location.reload(),
      _error => alert('Erreur du serveur.')
    );
  }

  onSubmitEmailPassword(data) {
    this.profilService.putEmailPassword(data.emailpassworditem).subscribe(
      _result => location.reload(),
      _error => alert('Erreur du serveur.')
    );
  }
}
