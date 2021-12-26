import { Component, Input, OnInit } from '@angular/core';
import { EmailService } from './../../../services/email.service';
import { Router } from '@angular/router';
import { SingleMailComponent } from '../single-mail/single-mail.component';
import { HeaderComponent } from './../../../header/header.component';
import { AuthComponentComponent } from '../auth-component/auth-component.component';
import { BaseComponentComponent } from '../../../base-component/base-component.component';
import { ProfilService } from '../../../services/profil.service';
import { StorageService } from '../../../services/storage.service';


export interface Email {
  id: number;
  email_sender: string;
  email_subject: string;
  email_size: number;
  created_at: string;
}

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent extends AuthComponentComponent implements OnInit {
  emails = [];
  selectedEmail: Email;
  isSelected = true;
  email: Email;

  messageServerError =
    'Error while processing the request by the server. We apologize for the inconvenience.';

  constructor(private emailService: EmailService,
              baseComp: BaseComponentComponent,
              profilService: ProfilService,
              router: Router,
              storageService: StorageService) {
    //super(router);
    super(baseComp, profilService, router, storageService);
  }

  ngOnInit() {
    this.emailService.getAllEmails().subscribe(
      data => {
        this.emails = data;
      },
      _error => {
        this.emails = [];
      }
    );
  }
  //ngOnInit(){this.emails = [
  //  {fk_user:2, email_sender:"a@or.fr", email_subject:"test", created_at:"10"},
  //  {fk_user:1, email_sender:"a@or.fr", email_subject:"test2", created_at:"11"}
  //  ];
  //this.selectedEmail=
  //}

  onGoToMail() {
    this.emailService.email = this.selectedEmail;
    //this.emailService.email = this.selectedEmail[0];
    this.router.navigate(['single-mail']);
  }

  onRestore(): void {
    this.emailService.restore(this.selectedEmail).subscribe(
      _result => location.reload(),
      _error => alert(this.messageServerError)
    );
  }

  onDelete(): void {
    this.emailService.delete(this.selectedEmail).subscribe(
      _result => location.reload(),
      _error => alert(this.messageServerError)
    );
  }

  onWhiteList(): void {
    this.emailService.putInWhiteList(this.selectedEmail).subscribe(
      _result => {
        location.reload();
      },
      error => {
        if (error.status !== '304') alert(this.messageServerError);
      }
    );
  }

  onBlackList(): void {
    this.emailService.putInBlackList(this.selectedEmail).subscribe(
      _result => location.reload(),
      _error => alert(this.messageServerError)
    );
  }

}
