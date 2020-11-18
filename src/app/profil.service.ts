import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Profil {
	full_name : string
	//mdp : string
	email : string
}
	

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient) { }
  
  getInfos(): Observable<Profil> {
		//return this.http.get<Profil>('http://localhost:8000/api/emails')
		return this.http.get<Profil>('http://543179125d8c.ngrok.io/api/user', {withCredentials: true})
  
	}
}