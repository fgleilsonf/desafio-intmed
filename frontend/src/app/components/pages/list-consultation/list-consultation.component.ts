import { Component, OnInit } from '@angular/core';
import { ModalService } from "../../../modal.service";
import { Specialty } from "../../../Specialty";
import { Consultation } from "../../../Consultation";
import { ConsultationService } from "../../../services/consultation.service";
import { faBookMedical } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-list-consultation',
  templateUrl: './list-consultation.component.html',
  styleUrls: ['./list-consultation.component.css']
})
export class ListConsultationComponent implements OnInit {
  bodyText: string | undefined;
  specialties: Specialty[] = [];
  consultations: Consultation[] = [];
  currentItem: Consultation | null = null;
  loading: boolean = false;
  faBookMedical = faBookMedical;

  constructor(private modalService: ModalService, private consultationService: ConsultationService) {
  }

  ngOnInit() {
    this.onLoadConsultation();
  }

  onLoadConsultation() {
    this.loading = true;
    this.consultationService.getConsultations().subscribe((items) => {
      this.consultations = items;
      this.loading = false;
    });
  }

  removeConsultation() {
    this.consultationService.remove(this.currentItem!.id).subscribe(()=> {
      this.modalService.open('modal-alert-success');

      this.modalService.close('modal-dialog-desmarcar');
      this.onLoadConsultation();
    });
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  showModalDialogDesmarcar(id: string, item: Consultation) {
    this.modalService.open(id);
    this.currentItem = item;
  }
}
