import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../../modal.service";
import {SpecialtyService} from "../../../services/specialty.service";
import {Specialty} from "../../../Specialty";
import {Consultation} from "../../../Consultation";
import {ConsultationService} from "../../../services/consultation.service";

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

  constructor(private modalService: ModalService, private consultationService: ConsultationService) { }

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

  async removeConsultation() {
    await this.consultationService.remove(this.currentItem!.id).subscribe();

    console.log('removeConsultation this.currentItem!.id',this.currentItem!.id);

    this.modalService.close('modal-dialog-desmarcar');

    this.onLoadConsultation();
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
