import { RouterLink, RouterOutlet } from '@angular/router';
import { Component, inject, TemplateRef, ViewEncapsulation } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-for-update',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [RouterLink,RouterOutlet ],
  templateUrl: './modal-for-update.component.html',
  styleUrl: './modal-for-update.component.css'
})
export class ModalForUpdateComponent {
	private modalService = inject(NgbModal);
  // private modalService = inject(NgbModal);
	closeResult = '';
	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}
	openBackDropCustomClass(content: TemplateRef<any>) {
		this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
	}
// (click)="upDateCandidate()
upDateCandidate(){
  
}
}
