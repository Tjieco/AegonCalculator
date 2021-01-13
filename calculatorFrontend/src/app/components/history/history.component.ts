import { Component, OnInit } from '@angular/core';
import { Calculation } from 'src/app/model/calculation';
import { CalculateService } from 'src/app/services/calculate.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  calculations: Array<Calculation>

  constructor(private calculateService: CalculateService) { }

  ngOnInit(): void {
    this.calculateService.getCalculationHistory().subscribe(data => {console.log(data); this.calculations = data});
  }

}
