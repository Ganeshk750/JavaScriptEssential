# JavaScriptEssential
_**JavaScript array methods:-**_
```
1.some()
2.every()
3.reduce()
4.map()
5.flat()
6.filter()
7.forEach()
8.findIndex()
9.find()
10.sort()
11.concat()
12.fill()
13.includes()
14.reverse()
15.flatMap()
```
## some():-
This method tests the array with a function passed as a parameter. It will return ```true``` if at lest one element matches the test and ```false``` for the opposite.
```javascript
const myArray = ['a', 'b', 'c','d', 'e'];
myArray.some(test => test === 'c');

//Output: true
```
## every():-
This method tests the array with a function passed as a parameter. It will return ```true``` if at lest one element matches the test and ```false``` for the opposite.
```javascript
const myArray = ['a', 'b', 'c','d', 'e'];
myArray.every(test => test === 'c');

//Output: false

const myArray = ['a', 'a', 'a','a', 'a'];
myArray.every(test => test === 'a');

//Output: true
```


