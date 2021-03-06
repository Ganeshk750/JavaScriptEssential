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
## reduce():-
This method recevies a function which has an accumulator and a value as an argument. It applies the function to the accumulator and each value in the array to return at the end just a single value.

```javascript
const myArray = [1,2,3,4,5];
myArray.reduce((total, value) => total * value);

// 1*2*3*4*5 = 120
//Output:- 120
```
## map():-
This method recevies a function as a parameter. And return a new array that contains an image of each element of the array.It will always return the same amount of items.
```javascript
const myArray = [
  {id: 1, name:'Ganesh'},
    {id: 2, name:'Aditya'},
      {id: 3, name:'Ajeet'}];
      
      myArray.map(element => console.log(element.name));
      
      // Output:- Ganesh
                //  Aditya
                //  Ajeet
  ```
  ## flat():-
  This method creates a new array that contains the elements holden an the sub-array and flat it into the new array. Notice that, this     method will go only one level depth.
  ```javascript
  const myArray = [[1,2],[3,5],5];
  myArray.flat();
  //Output:- [1,2,3,4,5]
```
## filter():- 
This method recevies a function as a parameter and return a new array that contains all the elements of the array for which the filtering function passed as a agument retrun `true`.
```javascript
 const myArray = [
{id: 1, name:'Jack' },
{id: 2, name:'Joy'},
{id: 3, name: 'David'},
{id: 4, name: 'David'}];
myArray.filter(element => element.name === 'David');

//Output:- 0:{id: 3, name: 'David'}
 //        1:{id: 4, name: 'David'}
```
## forEach():-
   This method applies a function to each element of the array.
```javascript
 const myArray = [
{id: 1, name:'Jack' },
{id: 2, name:'Joy'},
{id: 3, name: 'David'}];

myArray.forEach(element => console.log(element.name));
//Output:- Jack
//         Joy
//         David
```
## findIndex():-
This method receives a function as a parameter and will apply it to the array. It returns the index of an element fond and which satisfies the test function passed as an argument or `-1` if not none satisfies it.
```javascript
 const myArray = [
{id: 1, name:'Jack' },
{id: 2, name:'Joy'},
{id: 3, name: 'David'}];

myArray.findIndex(element => element.id === 3);
//Output:- 2

myArray.findIndex(element => element.id === 7);
//Output:- -1
```
## find():-
This method receives a function as an argument and will apply it to the array. it returns the value of an element found in the array and which satisfies the test function otherwise, it returns `undefined`.
```javascript
 const myArray = [
{id: 1, name:'Jack' },
{id: 2, name:'Joy'},
{id: 3, name: 'David'}];

myArray.find(element => element.id === 3);
//Output:- {id:3, name:'David'}

myArray.find(element => element.id === 7);
//Output:- undefined
```
## sort():-
This method receives a function as a parameter.It sort the elements of an the array and returns it.
```javascript
const myArray = [5,4,3,2,1]
//Sort from smallest to largest
myArray.sort((a,b) => a - b);
//Output:- [1,2,3,4,5];

//Sort from largest to smallest
myArray.sort((a, b) => b - a);
//Output:- [5,4,3,2,1]
```

