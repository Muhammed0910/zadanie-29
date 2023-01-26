1
//выведите в консоли каждый элемент из строки ниже с помощью for
let str = 'My name is Samuil';
for(let q of str)
console.log(q)
2
//выведите в консоли каждый элемент из массива ниже с помощью for
let arr1 = [1, 2, 3, 4, 5];
for(let w of arr1)
console.log(w)
3
//создайте набор с помощью new Set()
let variable1 = new Set([])
4
//добавьте в созданный ранее набор, элементы 'a', 'b', 'c' с помощью add()
variable1.add('a')
variable1.add('b')
variable1.add('c')
5
//выведите в консоли слово 'Element' для каждого элемента из массива с помощью forEach()
let arr2 = [1, 2, 3, 4, 5];
let text = "";
arr2.array.forEach(function(value) {
    return text = 'Element';
})
console.log(text)
6
//выведите все значения из набора
let fruits1 = new Set(['apple', 'banana', 'mango']);

7
//выведите все ключи из набора
let fruits2 = new Set(['apple', 'banana', 'mango']);
const myIterator1 = fruits2.keys();
8
//выведите все ключи из набора
let fruits3 = new Set(['apple', 'banana', 'mango']);
const myIterator2 = fruits3.keys();
9
//создайте обьект с помощью new Map()
const fruits = new Map();
10
//добавьте в созданный ранее обьект, с помощью set()
let apple = 500;
let banana = 300;
let orange = 100;
fruits.set('apple', 500);
fruits.set('banana', 300);
fruits.set('orange', 100);
11
//выведите в консоли значение apple с помощью get() из обьекта ниже
let fruits4 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);
console.log(fruits4.get('apple'));
12
//выведите в консоли количество элементов в мапе ниже
let fruits5 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);
console.log(fruits5.size())
13
//удалите элемент 'apple' из мапа ниже
let fruits6 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);
console.log(fruits6.delete('apple'));
14
//очистите мап ниже
let fruits7 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);
console.log(fruits7.clear());
15
//проверьте находится ли 'apple' в мапе ниже
let fruits8 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);
console.log(fruits8.has('apple'));
16
//выведите все значения из обьекта ниже
let fruits9 = new Set(['apple', 'banana', 'mango']);
//?
17
//выведите все ключи из обьекта ниже
let fruits10 = new Set(['apple', 'banana', 'mango']);
console.log(fruits6.keys());
18
//выведите все ключи/значения из обьекта ниже
let fruits11 = new Set(['apple', 'banana', 'mango']);
//?