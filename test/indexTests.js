const assert = require('chai').assert
const index = require('../index')

//Get the results
const text = index.helloWorld()
const testArray = index.arrayOfNumbers()

describe('index app', function () {
    describe('Text Test Cases', function () {

        it('Text validation', function () {
            assert.equal(text, 'hello world', 'It should be displaying hello world')
        })

        it('Validation of text type', function () {
            assert.typeOf(text, 'string', 'The returning value should be a string')
        })

    })

    describe('Substraction Test Cases', function () {

        it('Validation of substruction result', function () {
            const result = index.substraction(4, 2)
            assert.isBelow(result, 5, 'The result should be below 5')
        })

        it('Should handle negative numbers', function () {
            const result = index.substraction(-2, 3)
            assert.equal(result, -5)
        })

        it('Validation of substruction result type', function () {
            const result = index.substraction(6, 2)
            assert.typeOf(result, 'number', 'The returning value should be a number')
        })

        it('Should throw an error when passed non-number values', function () {
            assert.throws(function () { index.substraction('6', '2') }, Error, /Both arguments must be numbers/)
        })

    })

    describe('Array Test Cases', function () {

        it('Array include validation', function () {
            assert.include(testArray, 5, 'The array should include 5')
        })

        it('Array length validation', function () {
            assert.lengthOf(testArray, 6, 'The array lenght should include 6')
        })

        it('Validation of array type', function () {
            assert.typeOf(testArray, 'array', 'The returning value should be an array')
        })

    })
})
