function funсSumm(a, b){
    return (a + b);
}
function funсDif(a, b){
    return (a - b);
}
function funсMult(a, b){
    return (a * b);
}
function funсDiv(a, b){
    return (a / b);
}
function mathOperation(arg1, arg2, operation){
    switch (true){
        case operation == 'addition':
           result = funсSumm(arg1, arg2);
        break;
        case operation == 'subtraction':
           result = funсDif(arg1, arg2);
        break;
        case operation == 'multiplication':
           result = funсMult(arg1, arg2);
        break;
        case operation == 'division':
           result = funсDiv(arg1, arg2);
        break;
    }
    return result;
}

x = mathOperation(10, 5, 'division')
console.log(x)
