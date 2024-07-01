import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
   projects: any;
  constructor(private authService: AuthService,
    public projectService:ProjectService,
  ){
  }

ngOnInit():void{
  this.projects = this.projectService.getProjects();
}
}
