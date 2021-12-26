import { Component, OnInit } from '@angular/core';
import { HistoryService } from './../../../services/history.service';
import { Router } from '@angular/router';
import { AuthComponentComponent } from '../auth-component/auth-component.component';
import { ProfilService } from '../../../services/profil.service';
import { StorageService } from '../../../services/storage.service';


export interface History {
  email_sender: string;
  email_subject: string;
  reason: string;
  created_at: string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent extends AuthComponentComponent implements OnInit {

  selectedEmail: History;
  isSelected = true;
  emails: History[] = [];

  messageServerError =
    'Error while processing the request by the server. We apologize for the inconvenience';

  constructor(private historyService: HistoryService,
              profilService: ProfilService,
              router: Router,
              storageService: StorageService) {
    //super(router);
    super(profilService, router, storageService);
  }

  ngOnInit() {
    this.historyService.getAllHistory().subscribe(
      data => {
        this.emails = data;
      },
      _error => {
        this.emails = [];
      }
    );
  }

  /**ngOnInit(){this.emails = [
    {email_sender:"a@or.fr", email_subject:"test", reason:"black_list", created_at:"10"},
    {email_sender:"a@or.fr", email_subject:"test2", reason:"white_list", created_at:"11"}
    ];

  }**/
}
