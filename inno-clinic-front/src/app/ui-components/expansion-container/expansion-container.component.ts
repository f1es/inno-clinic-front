import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expansion-container',
  imports: [NgStyle],
  templateUrl: './expansion-container.component.html',
  styleUrl: './expansion-container.component.css'
})
export class ExpansionContainerComponent {
  public isExpanded: boolean = true;

  @Input() header: string = "";
  @Input() content: any;
  @Input() columns: number = 1000;
  get Columns() {
    return `repeat(${this.columns}, auto)`;
  }

  public changeState(): void{
    this.isExpanded = !this.isExpanded;
  }
}
