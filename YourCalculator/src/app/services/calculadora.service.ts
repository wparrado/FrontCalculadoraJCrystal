import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor(private http: HttpClient) { }
  url = 'https://localhost:8080/api/';

  getOperadores() {
      return this.http.get(this.url + 'listaOperadores/operadores');
  }

  greeting(name: string) {
      return this.http.get(this.url + 'greetings/hello?arg0=' + name);
  }

  operate(value1: number, value2: number, operator: string) {
      switch (operator) {
        case '+':
            return this.http.get(this.url + 'calculadora/operar?arg0=' + value1 +
            '&arg1=' + value2 +
            '&arg2=SUMA');
            break;
        case '-':
             return this.http.get(this.url + 'calculadora/operar?arg0=' + value1 +
             '&arg1=' + value2 +
             '&arg2=RESTA');
             break;
        case '*':
             return this.http.get(this.url + 'calculadora/operar?arg0=' + value1 +
             '&arg1=' + value2 +
             '&arg2=MULTIPLICACION');
             break;
        case '/':
             return this.http.get(this.url + 'calculadora/operar?arg0=' + value1 +
             '&arg1=' + value2 +
             '&arg2=DIVISION');
             break;
          default:
              break;
      }
  }
}
