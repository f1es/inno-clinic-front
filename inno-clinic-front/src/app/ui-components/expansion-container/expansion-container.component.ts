import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expansion-container',
  imports: [],
  templateUrl: './expansion-container.component.html',
  styleUrl: './expansion-container.component.css'
})
export class ExpansionContainerComponent {
  @Input() header: string = "";
  @Input() content: any;
}
