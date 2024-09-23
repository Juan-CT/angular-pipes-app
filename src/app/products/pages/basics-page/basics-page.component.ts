import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})

export class BasicsPageComponent {

  public nameLower: string = 'pepe';
  public nameUpper: string = 'PEPE';
  public fullName: string = 'pEPe ViyuELa';

  public customDate: Date = new Date();
}
