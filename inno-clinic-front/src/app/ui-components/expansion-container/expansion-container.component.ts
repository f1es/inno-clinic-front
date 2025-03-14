import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expansion-container',
  templateUrl: './expansion-container.component.html',
  styleUrl: './expansion-container.component.css'
})
export class ExpansionContainerComponent {
  public isExpanded: boolean = true;

  @Input() header: string = "";
  @Input() content: any;
  @Input() canAdd: boolean = true;
  @Input() addElementFunction: Function = () => {};

  public changeState(): void{
    this.isExpanded = !this.isExpanded;
  }
}
