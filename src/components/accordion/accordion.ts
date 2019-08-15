import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';
import { CardContent } from 'ionic-angular';

@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent implements OnInit {
  accordionExpanded = false;
  @ViewChild("cc") CardContent: any;
  @Input('title') title: string;
  icon: string = "arrow-forward";

  constructor(public renderer: Renderer) {
  }
  ngOnInit() {
    console.log(this.CardContent.nativeElement);
    //animation taking place
    this.renderer.setElementStyle(this.CardContent.nativeElement, "webkitTransition", "max-height 700ms, padding 500ms");
  }
  toggleAccordion() {
    if (this.accordionExpanded) {
      this.renderer.setElementStyle(this.CardContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.CardContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.CardContent.nativeElement, "max-height", "400px");
      this.renderer.setElementStyle(this.CardContent.nativeElement, "padding", "13px 16px");
    }
    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward"
  }
}
