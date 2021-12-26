import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ListService } from '../../../services/list.service';
import { AuthComponentComponent } from '../auth-component/auth-component.component';
import { BaseComponentComponent } from '../../../base-component/base-component.component';
import { ProfilService } from '../../../services/profil.service';
import { Router } from '@angular/router';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends AuthComponentComponent implements OnInit {
  addInWhiteListForm;
  addInBlackListForm;
  whitelist: string[] = [];
  blacklist: string[] = [];
  whiteemail: string;
  blackemail: string;
  selectedWhite : String;
  selectedBlack : String;

  messageServerError =
    'Error while processing the request by the server. We apologize for the inconvenience.';

  constructor(private listService: ListService,
              private formBuilder: FormBuilder,
              baseComp: BaseComponentComponent,
              profilService: ProfilService,
              router: Router,
              storageService: StorageService) {
    super(baseComp, profilService, router, storageService);
    this.addInWhiteListForm = this.formBuilder.group({
      whiteemailitem: ''
    });
    this.addInBlackListForm = this.formBuilder.group({
      blackemailitem: ''
    });
  }

  ngOnInit() {
    this.listService.getFromWhiteList().subscribe(
      whitedata => {
        this.whitelist = whitedata;
        this.listService.getFromBlackList().subscribe(
          blackdata => (this.blacklist = blackdata),
          _error => (this.blacklist = [])
        );
      },
      _error => (this.whitelist = [])
    );
  }

  onWhiteListSubmit(data) {
    this.addInWhiteListForm.reset();
    this.listService.postInWhiteList(data.whiteemailitem).subscribe(
      _result => location.reload(),
      _error => alert('Error during change')
    );
  }

  onBlackListSubmit(data) {
    this.addInBlackListForm.reset();
    this.listService.postInBlackList(data.blackemailitem).subscribe(
      _result => location.reload(),
      _error => alert('Error during change')
    );
  }

  onDeleteWhite(): void {
    this.addInWhiteListForm.reset();
    this.listService.deleteWhite(this.selectedWhite).subscribe(
      _result => location.reload(),
      _error => alert(this.messageServerError)
    );
  }

  onDeleteBlack(): void {
    this.addInBlackListForm.reset();
    this.listService.deleteBlack(this.selectedBlack).subscribe(
      _result => location.reload(),
      _error => alert(this.messageServerError)
    );
  }
}
