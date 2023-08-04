import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appIfLogin]',
})
export class IfLoginDirective {
  // first way use OnInit lifecycle
  // private show = false;

  // @Input() set appIfLogin(show: boolean) {
  //   this.show = show;
  //   this.displayTemplate();
  // }

  // constructor(
  //   private templateRef: TemplateRef<unknown>,
  //   private viewContainer: ViewContainerRef
  // ) {}

  // ngOnInit(): void {
  //   this.displayTemplate();
  // }

  // displayTemplate() {
  //   this.viewContainer.clear();
  //   if (this.show) {
  //     this.viewContainer.createEmbeddedView(this.templateRef);
  //   } else {
  //     this.viewContainer.clear();
  //   }
  // }

  // second way used OnChanges lifecycle
  @Input() appIfLogin!: boolean; // Input to determine if the user is logged in

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnChanges() {
    this.viewContainer.clear();

    if (this.appIfLogin) {
      // If the user is logged in, render the content inside the template
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      // If the user is not logged in, clear the view container
      this.viewContainer.clear();
    }
  }

}
