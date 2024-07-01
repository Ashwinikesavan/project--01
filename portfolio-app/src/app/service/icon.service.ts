import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.addSvgIcon('instagram', 'assets/instagram.svg');
    this.addSvgIcon('twitter', 'assets/twitter.svg');
  }

  private addSvgIcon(iconName: string, url: string): void {
    this.matIconRegistry.addSvgIcon(
      iconName,
      this.domSanitizer.bypassSecurityTrustResourceUrl(url)
    );
  }
}
