var i = 0
while (i < 100) {
    i = ++i
    var k = 1
    var a = 0
    while (k < i) {
        k = ++k
        if (i % k == 0) {
            a = ++a
        }
    }
    if (a == 1) {
        console.log(i)
    }
}
