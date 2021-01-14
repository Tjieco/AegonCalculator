import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { CalculateService } from 'src/app/services/calculate.service';
import { HistoryService } from 'src/app/services/history.service';
import { HistoryComponent } from '../history/history.component';

import { CalculateComponent } from './calculate.component';

describe('CalculateComponent', () => {
  let component: CalculateComponent;
  let fixture: ComponentFixture<CalculateComponent>;
  let mockCalculateService: CalculateService;
  let mockHistoryService: HistoryService;

  beforeEach(async(() => {
    mockCalculateService = jasmine.createSpyObj('calculateService', {
      calculate: of(),
      getCalculationHistory: of()
    });
    mockHistoryService = jasmine.createSpyObj('historyService', {
      getCalculationHistory: of(),
      setHistory: of(),
      addCalculation: of()
    });
    TestBed.configureTestingModule({
      declarations: [ CalculateComponent ],
      providers: [
        HistoryComponent,
        FormBuilder,
        { provide: CalculateService, useValue: mockCalculateService},
        { provide: HistoryService, useValue: mockHistoryService}
      ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
