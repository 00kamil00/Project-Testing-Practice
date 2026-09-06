import { calculator } from "./calculator";


describe('calculator', () => {
    test('adds two numbers', () => {
        expect(calculator.add(2, 1)).toBe(3)
    })

    test('subtracts two numbers', () => {
        expect(calculator.subtract(5, 3)).toBe(2)
    })

    test('multiplies two numbers', () => {
        expect(calculator.multiply(2, 3)).toBe(6)
    })

    test('divides two numbers', () => {
        expect(calculator.divide(6, 2)).toBe(3)
    })

    test('divides by zero', () => {
        expect(calculator.divide(2, 0)).toBe(Infinity)
    })

    test('adding float numbers', () => {
        expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3)
    })

    test('dividing float numbers', () => {
        expect(calculator.divide(10, 3)).toBeCloseTo(3.333, 2)
    })

    test('adding negative numbers', () => {
        expect(calculator.add(-2, -3)).toBe(-5)
    })

    test('subtracting negative numbers', () => {
        expect(calculator.subtract(5, -2)).toBe(7)
    })

    test('multiplying with negative number', () => {
        expect(calculator.multiply(2, -7)).toBe(-14)
    })

    test('multiplying with negative numbers', () => {
        expect(calculator.multiply(-2, -7)).toBe(14)
    })

    test('adding zero to number', () => {
        expect(calculator.add(1, 0)).toBe(1)
    })

    test('subtracting zero from number', () => {
        expect(calculator.subtract(1, 0)).toBe(1)
    })

    test('multiplying number by zero', () => {
        expect(calculator.multiply(2, 0)).toBe(0)
    })
})