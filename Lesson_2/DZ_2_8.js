function power(val, pow){
    if (pow == 1) {
        return val;
    }
    else {
        return val * power(val, pow - 1)
    }
}
x = power(2, 3)
console.log(x)
