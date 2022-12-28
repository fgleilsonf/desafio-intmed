import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConsultationComponent } from './new-consultation.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe('NewConsultationComponent', () => {
  let component: NewConsultationComponent;
  let fixture: ComponentFixture<NewConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewConsultationComponent ],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
