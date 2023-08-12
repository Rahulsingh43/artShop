import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollEvent]'
})
export class ScrollEventDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const threshold = 100; // Adjust as needed
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > threshold) {
      const nativeElement = this.elementRef.nativeElement;
      this.renderer.addClass(nativeElement, 'fixed')
    } 
    else if (scrollTop < threshold){
      const nativeElement = this.elementRef.nativeElement;
      this.renderer.removeClass(nativeElement, 'fixed')
    }
  }
}
