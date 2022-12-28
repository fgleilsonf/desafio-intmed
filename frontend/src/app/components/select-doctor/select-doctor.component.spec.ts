import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDoctorComponent } from './select-doctor.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { DoctorService } from "../../services/doctor.service";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe('SelectDoctorComponent', () => {
  let component: SelectDoctorComponent;
  let fixture: ComponentFixture<SelectDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDoctorComponent ],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
