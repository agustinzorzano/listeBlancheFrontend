import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Storable, StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  creationForm;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private storageService: StorageService
  ) {
    this.creationForm = this.formBuilder.group({
      email: ['', Validators.required],
      email_password: ['', Validators.required],
      full_name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.storageService.retrieve(Storable.isAuth)) {
      this.router.navigate(['home']);
    }
  }

  onSubmit(data): void {
    this.userService.create(data).subscribe(
      _status => {
        this.router.navigate(['login']);
      },
      _error => alert('Failed to create the account')
    );
  }

  //goToHelp(){
  //this.helpComp.connect()
  //  this.router.navigate(['help'])
  //}
}
