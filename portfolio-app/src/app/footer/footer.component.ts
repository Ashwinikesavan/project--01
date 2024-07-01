import { Component } from '@angular/core';
import { IconService } from '../service/icon.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
constructor(private iconService:IconService){
  
}
}
