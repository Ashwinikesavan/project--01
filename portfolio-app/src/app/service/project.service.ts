import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
  public getProjects() {
    return[
      {
      'id':1,
      'name': 'Project starz',
      'angularVersion': 5,
      'company': 'Renault',
      'details': 'Measuring the financial health of the organization using various KPI.It is used by top 12 users to generate reports for top management.It is used to generate the KPI reports'
 
    },
    {
      'id':1,
      'name': 'Project oneQ',
      'angularVersion': 13,
      'company': 'Bosch',
      'details': `oneQ application focused on quality assessment, integrating various project levels, sub-project 
      assessment types, and measures from multiple quality assessment tools.
      Using Angular 13, HTML5, CSS3, JavaScript, Redux, Ag-grid, Angular Material, and Ngrx to create a 
      robust and responsive user interface`
    },
  
  
  ]
  }
}
