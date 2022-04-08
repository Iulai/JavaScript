function divider(a) {
a = String(a)
if (a.length == 1) {
    let x = {'units': Number(a[0])}
    return x;
}
else if (a.length == 2) {
    let x1 = {'units': Number(a[1]), 'tens': Number(a[0])}
    return x1;
}
else if (a.length == 3) {
    let x3 = {'units': Number(a[2]), 'tens': Number(a[1]), 'hundreds': Number(a[0])}
    return x3;
}
else if (a.length > 3) {
    let x4 = {}
    console.log('Число не должно быть больше 999')
    return x4
}
}
result = divider(321)
console.log(result)
