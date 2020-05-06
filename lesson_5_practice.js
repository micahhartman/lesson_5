/* let arr = ['10', '11', '9', '7', '8'];

arr.sort((a,b) => Number(b) - Number(a));

*/

////////////////////////////////////////

/*How would you order the following array of objects based on the year of publication of each book, 
from the earliest to the latest? 

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => {
	return Number(a.published) - Number(b.published);
});

console.log(books);

books.sort((b, a) => {
	return Number(a.published) - Number(b.published);
});
console.log(books);

*/

/////////////////////////////////////////////

///For each of these collection objects, demonstrate how you would access the letter g.


/*let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]]; 
arr1[2][1][3]


let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
arr2[1]['third'][0]

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
arr3[2]['third'][0][0]


let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
obj1['b'][1]

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
Object.keys(obj2.third)[0];
*/

///////////////////////////////////////////////////

/// how do you change the value 3 to 4 
/*
let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;

let obj1 = { first: [1, 2, [3]] };
obj1['first'][2][0] = 4;

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2['a']['a'][2] = 4
*/

/////////////////////////////////////////////////////
/// Compute and display the total age of the male members of the family.
/// Given this previously seen family object, print the name, age, and gender of each family member:


/* let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

Object.entries(munsters).forEach(entry => {
	let name = entry[0];
	let age = entry[1].age;
	let gender = entry[1].gender;

	console.log(`${name} is a ${age}-year-old ${gender}.`);
}); */

/// Using the forEach method, write some code to output all vowels from the strings in the arrays. 
/// Don't use a for or while loop.

/* let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

const AEIOU = 'aeiou';

Object.values(obj).forEach(arr => {
	arr.forEach(word => {
		word.split('').forEach(char => {
		 if (AEIOU.includes(char)){
		 	console.log(char);
		 }
		})
	})
	
});
*/

//////////////////////////////////////////
/* Given the following data structure, return a new array with the same structure, 
but with the subarrays ordered -- (alphabetically or numerically as appropriate 
	-- in ascending order. */

///FIRST Map the data structure to a new array.
/// Determine if the sub-array is numbers
///			if the subarray is numbers, sort the subarray smallest to largest
///if the subarray is not a number, sort it alphabetically


/* let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let newArr = arr.map(subArr => {
	if (typeof subArr[0] === 'string') {
		return subArr.sort((a, b) => b - a);
	} else {
		return subArr.slice().sort((a, b) => b - a);
	}
});

console.log(newArr);
*/


////////
/* let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

console.log(arr.map(obj => {
	let incrementedObj = {};

	for (let key in obj) {
		incrementedObj[key] = obj[key] + 1;
	} 

	return incrementedObj;
}));

console.log(arr); */
///////

/* let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr = arr.map(subArr => {
	return subArr.filter(num => num % 3 === 0);
});

console.log(newArr); */

/// firtst, sort
/// second compare function of sort if select odd numbers of sub arrays
/// second, sum odd numbers
///third, sort according to the sum
/// fourth rejoin the arrays

 /* let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
	let oddSumA = a.filter(num => num % 2 === 1)
					.reduce((sum, next) => sum = next);
	let oddSumB = b.filter(num => num % 2 === 1)
					.reduce((sum, next) => sum + next);

	return oddSumA - oddSumB;
});

console.log(arr); */


/* let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let capitalize = word => word[0].toUpperCase() + word.slice(1);

let newArr = Object.values(obj).map(attributes => {
	if (attributes['type'] === 'fruit') {
		return attributes['colors'].map(char => capitalize(char));
	} else {
		return attributes['size'].toUpperCase();
	}
});

console.log(newArr); */


let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let target = {}

Object.assign(arr, target);
console.log(target);









































