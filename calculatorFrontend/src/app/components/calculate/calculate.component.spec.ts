import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { CalculateService } from 'src/app/services/calculate.service';

import { CalculateComponent } from './calculate.component';

describe('CalculateComponent', () => {
  let component: CalculateComponent;
  let fixture: ComponentFixture<CalculateComponent>;
  let mockCalculateService: CalculateService;

  beforeEach(async(() => {
    mockCalculateService = jasmine.createSpyObj('calculateService', {
      calculate: of(),
      getCalculationHistory: of()
    });
    TestBed.configureTestingModule({
      declarations: [ CalculateComponent ],
      providers: [
        FormBuilder,
        { provide: CalculateService, useValue: mockCalculateService}
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
