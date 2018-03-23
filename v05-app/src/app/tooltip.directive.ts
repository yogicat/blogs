import { Input, Directive, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';


@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective implements OnInit {
  @Input('tooltip')
  tooltipOptions: string;


  isOn = false;
  span = this.renderer.createElement('span');
  text = this.renderer.createText('I am tooltip');
  tooltipPosition: string;
  @HostListener('mouseenter')
  onmouseenter() {
    if (this.isOn) { return; }
    this.onShow();
    this.isOn = !this.isOn;
  }

  @HostListener('mouseleave')
  onmouseleave() {
    if (!this.isOn) { return; }
    this.onHide();
    this.isOn = !this.isOn;
  }
  constructor(
    private element: ElementRef,
    private renderer: Renderer2) {}


  ngOnInit() {}

  getPosition() {
    const position = this.element.nativeElement.getBoundingClientRect();
    const tooltipPosition = this.span.getBoundingClientRect();
    console.log(tooltipPosition);
    const tooltipWidth = 70;
    const tooltipHeight = 30;
    const padding = 10;

    switch (this.tooltipOptions) {
      case 'left':
        this.tooltipPosition =
          `translate(${-tooltipWidth - padding}px,
          ${(position.height - tooltipHeight) / 2}px)`;
        break;
      case 'top':
        this.tooltipPosition =
          `translate(${-(tooltipWidth - position.width) / 2}px,
          ${-tooltipHeight - padding}px)`;
        break;
      case 'right':
        this.tooltipPosition =
          `translate(${tooltipWidth + padding}px,
          ${(position.height - tooltipHeight) / 2}px)`;
        break;
      default:
        this.tooltipPosition =
          `translate(${-(tooltipWidth - position.width) / 2}px,
          ${position.height + padding}px)`;
        break;
    }
  }

  onShow() {
    this.getPosition();
    this.renderer.appendChild(this.span, this.text);
    this.renderer.appendChild(this.element.nativeElement, this.span);
    this.renderer.addClass(this.span, 'commentTip');
    this.renderer.addClass(this.span, this.tooltipOptions);
    this.renderer.setStyle(this.span, 'transform', this.tooltipPosition);

  }

  onHide() {
    this.renderer.removeChild(this.element.nativeElement, this.span);
  }
}
