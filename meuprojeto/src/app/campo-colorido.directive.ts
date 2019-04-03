import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]' // poderia ser input tambem
})
export class CampoColoridoDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
     this.renderer.setStyle(this.elementRef.nativeElement,  'background-color', 'yellow');
   }

}
