import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../../auth.service";
import {ModalService} from "../../modal.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyModal = 'modal-dialog-logout';

  @Input() username!: string;
  @Output() setUser = new EventEmitter<string>();

  constructor(private auth: AuthService, private modalService: ModalService) {}

  ngOnInit() {

  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  showModal(id: string) {
    this.modalService.open(id);
  }

  logout() {
    this.auth.logout();
    this.setUser.emit('');
  }
}

