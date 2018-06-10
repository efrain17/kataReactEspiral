import React from 'react';
import {shallow} from 'enzyme';
import Exercise1 from '../Exercise1';

describe('Exercise1', () => {
  let component;
  let instance;
  
  beforeEach(() => {
    component = shallow(<Exercise1/>);
    instance = component.instance();
  });
  
  describe('on instance', () => {
    it('should defined state', () => {
      expect(instance.state).toEqual({});
    });

    it('Matriz generada', () => {
      let matris = instance.generarMatriz();
      expect(matris[0]).toEqual([1, 2, 3]);
      expect(matris[1]).toEqual([4, 5, 6]);
      expect(matris[2]).toEqual([7, 8, 9]);
    });

    it('Matriz generada Dos', () => {
      let matris = instance.generarMatrizDos();
      expect(matris[1]).toEqual([4, 5, 6]);
    });

    it('Matriz generada Tres', () => {
      let matris = instance.generarMatrizTres();
      let matrisCorrecta = [
        [ 1,  2,  3,  4,  5,  6],
        [18, 19, 20, 21, 22,  7],
        [17, 28, 29, 30, 23,  8],
        [16, 27, 26, 25, 24,  9],
        [15, 14, 13, 12, 11, 10]
      ];
      expect(matris).toEqual(matrisCorrecta);
    });

    it('Super matriz generada', () => {
      let matris = instance.generarSuperMatriz();
      let matrisCorrecta = [
        [ 1,  2,  3,  4,  5,  6],
        [22, 23, 24, 25, 26,  7],
        [21, 36, 37, 38, 27,  8],
        [20, 35, 42, 39, 28,  9],
        [19, 34, 41, 40, 29, 10],
        [18, 33, 32, 31, 30, 11],
        [17, 16, 15, 14, 13, 12]
      ];
      expect(matris).toEqual(matrisCorrecta);
    });

    it('Retornar numero iteraciones', () => {
      let matris = instance.generarMatriz();
      let numeroIteraciones = instance.getNumeroIteraciones(matris);
      expect(numeroIteraciones).toEqual(12);
    });

    it('Obtener resultado Uno', () => {
      let matris = instance.generarMatriz();
      let numeroIteraciones = instance.getNumeroIteraciones(matris);
      let resultado = instance.getRecorrido(matris, numeroIteraciones);
      expect(resultado).toEqual([1, 2, 3, 6, 9, 5, 4, 5, 7, 4, 5, 8]);
    });

    it('Obtener resultado Tres', () => {
      let matris = instance.generarMatrizTres();
      let numeroIteraciones = instance.getNumeroIteraciones(matris);
      let resultado = instance.getRecorrido(matris, numeroIteraciones);
      let correcto = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30
      ];
      expect(resultado).toEqual(correcto);
    });

    it('Obtener resultado Dos', () => {
      let matris = instance.generarMatrizDos();
      let numeroIteraciones = instance.getNumeroIteraciones(matris);
      let resultado = instance.getRecorrido(matris, numeroIteraciones);
      expect(resultado).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
    });

    it('Obtener resultado Super matriz', () => {
      let matris = instance.generarSuperMatriz();
      let numeroIteraciones = instance.getNumeroIteraciones(matris);
      let resultado = instance.getRecorrido(matris, numeroIteraciones);
      let resultadoCorrecto = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
        11, 12, 13, 14, 15, 16, 17, 18, 
        19, 20, 21, 22, 23, 24, 25, 26, 
        27, 28, 29, 30, 31, 32, 33, 34, 
        35, 36, 37, 38, 39, 40, 41, 42
      ];
      expect(resultado).toEqual(resultadoCorrecto);
    });

  });
});
