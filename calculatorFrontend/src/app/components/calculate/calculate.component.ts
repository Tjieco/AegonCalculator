import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CalculateService } from 'src/app/services/calculate.service';

export enum CalculationOperator {
  Add,
  Subtract,
  Multiply,
  Divide
}

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
  calculateForm: FormGroup;
  currentOperator: CalculationOperator;
  CalculationOperator = CalculationOperator;
  result: String;

  constructor(
    private calculateService: CalculateService,
    private formbuilder: FormBuilder)
   {
    this.calculateForm = this.formbuilder.group({
      first: 0,
      second: 0,
    });
    this.currentOperator = CalculationOperator.Add;
    this.result = '0';
   }
 
  ngOnInit(): void {
  }

  calculate(): void {
    let response = this.calculateService.calculate(
      this.calculateForm.get('first').value,
      this.calculateForm.get('second').value,
      this.currentOperator);
      
      response.subscribe(data => {
        this.result = data.result.toString();
    }, err => this.result = "error!"
    )
  }

  setOperator(operator: CalculationOperator): void {
    this.currentOperator = operator;
  }

}
