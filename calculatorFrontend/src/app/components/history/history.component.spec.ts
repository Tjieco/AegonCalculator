import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CalculateService } from 'src/app/services/calculate.service';

import { HistoryComponent } from './history.component';

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;
  let mockCalculateService: CalculateService;

  beforeEach(async(() => {
    mockCalculateService = jasmine.createSpyObj('calculateService', {
      calculate: of(),
      getCalculationHistory: of()
    });
    TestBed.configureTestingModule({
      declarations: [ HistoryComponent ],
      providers: [
        { provide: CalculateService, useValue: mockCalculateService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
