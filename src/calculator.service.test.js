import React from 'react';
import ReactDom from 'react-dom';
import CalculatorService from './calculator.service'


describe('calculatorService test', () => {

    const [calculate, concatenateNumber, Sum, Sub, Multiply, Divide] = CalculatorService();

    it('must ensure that 1 + 4 = 5.', () => {
        let sum = calculate(1, 4, Sum) ;
        expect(sum).toEqual(5);
    });

    it('must ensure that 1 - 4 = -3', () => {
        let subtract = calculate(1, 4, Sub);
        expect(subtract).toEqual(-3);
    });

    it('must ensure thar 1 * 4 = 4', () => {
        let multiply = calculate(1, 4, Multiply);
        expect(multiply).toEqual(4);
    });
    it('must ensure that 1 / 4 = 0.25', () => {
        let divide = calculate(1, 4, Divide);
        expect(divide).toEqual(0.25);
    });
    it('must return 0 for invalid operation', () => {
        let invalidOperation = calculate(1, 4, '%');
        expect(invalidOperation).toEqual(0)
    })

});