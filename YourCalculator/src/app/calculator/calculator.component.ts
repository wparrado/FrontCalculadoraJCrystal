import { CalculadoraService } from './../services/calculadora.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  operators: any[] = [];
  nameGreeting: any;
  result: number;
  constructor(public calculatorService: CalculadoraService) { }

  ngOnInit() {
  }

  greeting(name: string)
  {
    debugger;
    this.calculatorService.greeting(name)
        .subscribe((data: any) => {
          console.log(data.resultObject);
        });
  }

  getOperadores() {
    this.calculatorService.getOperadores()
        .subscribe((data: any) => {
          this.operators = data.resultObject;
        });
  }

  operate(value1: number, value2: number, operator: string)
  {
    this.calculatorService.operate(value1, value2, operator)
        .subscribe((data: any) => {
          this.result = data.resultObject;
        });
  }

}
