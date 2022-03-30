var a = 1, b = 1, c, d;

c = ++a; /* alert(c); 2, В префиксной форме сначала происходит инкрементирование, затем возврат с
обновленным значением.*/

d = b++; /* alert(d); 1, В постфиксной форме сначала происходит возвращение значения, а потом выполняется
инкрементирование */

c = (2 + ++a); // alert(c); 5, В первом примере переменной а было присвоено значение a + 1

d = (2+ b++); /* alert(d); 4, Во втором примере переменной b было присвоено значение b + 1.
Постфиксная форма вернула значение переменной d, затем выполнилось очередное инкрементирование */

alert(a); // 3, В третьем примере переменной a было присвоено значение a + 1
alert(b); // 3, В последнем примере переменной b было присвоено значение  b + 1

// Получается, что форма c = ++a равнозначна форме c = a = a + 1
