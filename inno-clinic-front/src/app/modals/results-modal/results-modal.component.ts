import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ResultDialogData } from './results-modal.data';
import { DocumentsService } from '../../services/documents-service/documents.service';

@Component({
  selector: 'app-results-modal',
  imports: [MatDialogModule],
  templateUrl: './results-modal.component.html',
  styleUrl: './results-modal.component.css'
})
export class ResultsModalComponent {
  constructor(private docimentsService: DocumentsService) {}

  protected readonly data = inject<ResultDialogData>(MAT_DIALOG_DATA);

  public downloadDocument(): void {
    this.docimentsService.getResult(this.data.result.id).subscribe();
  }
}
