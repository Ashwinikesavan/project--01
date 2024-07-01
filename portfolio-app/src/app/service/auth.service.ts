import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private sessionSubject = new BehaviorSubject<boolean>(false);
  sessionState$ = this.sessionSubject.asObservable();
  
  users: any[] =[
    {
      id: '123',
      name: 'Ashwini',
      userName: 'Admin',
      password: 'Admin'
    },
    {
      id: '456',
      name: 'Ke',
      userName: 'Admin',
      password: '12345'
    },
  ]
session:any;
  constructor(private router: Router,
    private toastr: ToastrService
  ) { 
    let getSession = localStorage.getItem('session');
    if(getSession){
      getSession = JSON.parse(getSession);
      this.sessionSubject.next(true);
    }
    this.session = getSession

  }


login(username: string, password: string, session:boolean) {

  let loginCredential = (this.users.find(u=> u.userName === username && u.password === password));
  if(loginCredential){
    this.sessionSubject.next(session);
    this.session = loginCredential;
    localStorage.setItem('session', JSON.stringify(this.session))
}
return loginCredential;
}

logout(session:boolean){
  this.sessionSubject.next(session);
  this.session = null;
  localStorage.removeItem('session');
  this.router.navigateByUrl('/');
  this.toastr.success('Logged Out successfully')
}
}