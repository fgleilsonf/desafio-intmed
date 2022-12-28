import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {

  @Output() handleClick: EventEmitter<any> = new EventEmitter();
  @Input() isLink: boolean = false;
  @Input() title: string = '';
  @Input() icon!: any;
  @Input() type: string = 'button';
  @Input() disabled!: boolean;
  constructor() {}

  ngOnInit(): void {}

  onHandleClick() {
    this.handleClick.emit();
  }
}
