import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]', // poderia ser input tambem
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  @Input('appCampoColorido') cor = 'grey';

  @HostBinding('style.backgroundColor') corDeFundo: string;


  @HostListener('focus') colorir() {
    this.corDeFundo = this.cor;
  }

  @HostListener('blur') descolorir() {
    this.corDeFundo = 'transparent';

  }

}
