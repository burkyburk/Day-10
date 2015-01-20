// 1) 



// 	var properties = {
// 		firstName: 'Jacob', 
// 		lastName: 'Burkhart',
// 		age: 24,
// 		city: 'Austin'
// 			};

// function getAllProperties(person) {
// 	'use strict';
// 	if (!(person instanceof Object)) {
// 		throw 'you did not unput an object, try again';
// 	}

// for(var prop in person) {
// 	console.log(prop + ' = ' + person[prop]);
// }
// }

// getAllProperties(properties);






// 2) Create a function that takes an object and console.logs that object. Then delete the rollno property of the object and console.log the object again. For example:

// var person = {firstName: "Bob", lastName: "Smith", age: 32, rollno: 12};
// deleteRollno(person)
// {firstName: "Bob", lastName: "Smith", age: 32, rollno: 12} {firstName: "Bob", lastName: "Smith", age: 32}

// 	var properties = {
// 		firstName: 'Jacob', 
// 		lastName: 'Burkhart',
// 		age: 24,
// 		city: 'Austin',
// 		rollno: 12
// 			};

// function getAllProperties(person) {
// 	'use strict';
// 	if (!(person instanceof Object)) {
// 		throw 'you did not unput an object, try again';
// 	}

// for(var prop in person) {
// 	console.log(prop + ' = ' + person[prop]);
// }

// function deleteRollno(person)	{
// 	delete properties.rollno;
// 	for(var prop in person) {
// 		console.log(prop + '=' + person[prop]);
// 	}
// }
// deleteRollno(properties);
// }
// getAllProperties(properties);



// 3) Create a function that takes an object and returns the number of properties on that object that start with the letter "a" or "A"

var properties = {
		firstName: 'Jacob', 
		lastName: 'Burkhart',
		age: 24,
		city: 'Austin',
		rollno: 12
			};
function filter(letter) {
	'use strict';
  var results = [];
  var len = properties.length;
  for (var i = 0; i < len; i++) {
    if (properties[i].indexOf(letter) === 0) results.push(properties[i]);
  }
  return results;

}
filter(properties);

// 4) Create a function that takes a cylinder object and returns the volume of that cylinder. The cylinder object will have radius and height properties.
var myCylinder = {
	height: 20,
	radius: 5,
	weight: 200
};

function volumeFind(cylinder) {


var results = Math.PI * (cylinder.radius * cylinder.radius) * cylinder.height;



	return results;
}

volumeFind(myCylinder);





// // 5) Create a function that takes a firstName, lastName and age and returns an object with 
// firstName, lastName and age properties as well as a friends property that contains a list of 
// friend names. 
// Add at least 3 friends to the friends list.
function createObject(firstName, lastName, age)	{

var person = {
	myfirstName: firstName,
	mylastName: lastName,
	myAge: age,
	mylist: ['johnny', 'Jimmy', 'Jeffrey']
};
return person;

}





// 6) Create a function that takes the result of the last problem and a friend name and adds
 // that friend to the friends property of the object.
function addFriend(result, friend)	{

	return result.mylist.push(friend);
	
}






