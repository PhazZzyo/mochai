module.exports = {
    helloWorld: function () {
        return 'hello world'
    },

    arrayOfNumbers: function () {
        return [0, 1, 2, 3, 4, 5]
    },

    substraction: function (num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error('Both arguments must be numbers');
        }
        return num1 - num2;
    }
}