function CalculatorService() {
    const Sum = '+';
    const Sub = '-';
    const Multiply = '*';
    const Divide = '/';

    function calculate(number1, number2, operation) {
        let result;

        switch (operation) {
            case Sum:
                result = number1 + number2;
                break;
            case Sub:
                result = number1 - number2;
                break;
            case Multiply:
                result = number1 * number2;
                break;
            case Divide:
                result = number1 / number2;
                break;
            default:
                result = 0;  
        }

        return result;
    }

    function concatenateNumber(currentNumber, concatNumber) {
        // if it contains only 0 or null, reset the value
        if (currentNumber === '0' || currentNumber === null){
            currentNumber = '';
        }

        //when the first digit is '.', concatenate '0' before '.' .
        if (currentNumber === '.' && currentNumber === '') {
            return '0.';
        }

        //case '.' be typed and already contains a period, just return
        if (concatNumber ==='.' && currentNumber.indexOf('.') > -1) {
            return currentNumber;
        }

        return currentNumber + concatNumber;
    }
    
    return [
        calculate,
        concatenateNumber,
        Sum,
        Sub,
        Multiply,
        Divide
    ];

}

export default CalculatorService;