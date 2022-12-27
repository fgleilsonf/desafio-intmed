import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAgendaComponent } from './select-agenda.component';

describe('SelectAgendaComponent', () => {
  let component: SelectAgendaComponent;
  let fixture: ComponentFixture<SelectAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAgendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
