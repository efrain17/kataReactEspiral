import React, {Component} from 'react';

export class Exercise1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  generarMatriz() {
    return [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [5, 4, 5]
    ];
  }

  generarMatrizDos() {
    return [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
  }

  generarSuperMatriz() {
    return [
      [ 1,  2,  3,  4,  5,  6],
      [22, 23, 24, 25, 26,  7],
      [21, 36, 37, 38, 27,  8],
      [20, 35, 42, 39, 28,  9],
      [19, 34, 41, 40, 29, 10],
      [18, 33, 32, 31, 30, 11],
      [17, 16, 15, 14, 13, 12]
    ];
  }

  generarMatrizTres() {
    return [
      [ 1,  2,  3,  4,  5,  6],
      [18, 19, 20, 21, 22,  7],
      [17, 28, 29, 30, 23,  8],
      [16, 27, 26, 25, 24,  9],
      [15, 14, 13, 12, 11, 10]
    ];
  }

  getNumeroIteraciones(matris) {
    return matris[0].length * matris.length;
  }

  getRecorrido(matris, numeroIteraciones) {
    let resultado = [];
    let fila = 0;
    let columna = 0;
    let maxFila = matris.length- 1;
    let minFila = 0;

    let minColumna = 0;
    let maxColumna = matris[0].length -1;
    let estado = null;

    for (var i = 0; i < numeroIteraciones; i++) {
      if(matris[fila] && matris[0][columna]) {
        resultado.push(matris[fila][columna]);
      }
      estado = null;
      if(fila > minFila  && columna == minColumna) {
        fila--;
        estado = 'Subir';
      }
      else if(fila == minFila && columna < maxColumna) {
        columna ++;
        estado = 'Derecha';
      }
      else if(fila == maxFila && columna >= minColumna) {
        columna --;
        estado = 'Izquierda';
      }
      else if(columna == maxColumna && fila <= maxFila) {
        fila ++;
        estado = 'Bajar';
      }

      if(columna == maxColumna && fila == maxFila && estado == 'Bajar') {
        maxColumna = maxColumna - 1;
      }
      if(columna == minColumna && fila == minFila && estado == 'Subir') {
        minColumna = minColumna + 1;
      }
      if(fila == minFila && columna == maxColumna && estado == 'Derecha') {
        minFila = minFila +1;
      }
      if(fila == maxFila && columna == minColumna && estado == 'Izquierda') {
        maxFila = maxFila - 1;
      }
    } 
    return resultado;
  }
  
  
  render() {
    return (
      <div className="container">
        Exercise1 page
      </div>
    );
  }
}

export default Exercise1;
