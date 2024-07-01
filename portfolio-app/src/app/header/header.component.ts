import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn = false;
 
  constructor(private authService: AuthService){
    
  let user = localStorage.getItem('session'); 
  } 
  
  ngOnInit(): void {
    this.authService.sessionState$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }
  
logout(){
this.authService.logout(false);
}

}
