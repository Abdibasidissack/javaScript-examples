// itteration
// let numbers = [45,4,9,16,25];
// let numbers_2 = numbers.map(func);

// function func(value,index, array)
// {
//      return value*2
// }


//   .forEach()
const groceries = ['brown sugar','salt','cranberries','walnut']

//groceries.forEach((grocery_Item)=>{console.log('-' + grocery_Item) })
groceries.forEach( function (grocery_Item){
    console.log('-' + grocery_Item)
})


// exercise
const fruit = ['mango','papaya','pineapple','apple']
fruit.forEach((fruit_item)=>console.log('[+] '+fruit_item))


//.map()
const map_numbers = [1,2,3,4,5]
const big_nubers = map_numbers.map((map_numbers_item)=>{return map_numbers_item*10})
console.log(big_nubers)

//exercise
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
//creat a new array that contains the first character of each string in animal
const secretMessage = animals.map((animal)=>console.log(animal[0]))

//part 2
const bigNumber = [100,200,300,400,500]
const smallNumber = bigNumber.map((samllnum)=>{return (samllnum/100)})
console.log(smallNumber)


//,filter()
    const words = ['chair','music','pillow','brick','pen','door']
    const shortWords = words.filter((word)=>{return word.length < 6})
    console.log(shortWords)

//ecercise
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const random_number = randomNumbers.filter((numbber)=> { return numbber<250})
console.log(random_number)


// .findIndex()
const jumbledNums = [123, 25, 78, 5, 9]; 
const lessThanTen = jumbledNums.findIndex(num => {
    return num < 10;
  });
  console.log(lessThanTen)

  //excercise
  const animals2 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
  const foundAnimal = animals2.findIndex(animal11 => {
    return animal11 === 'elephant';
  });
  console.log(foundAnimal)



  // .reduce()

const numbers8 = [1, 2, 4, 10];

const summedNums = numbers8.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(summedNums) // Output: 17

const numbers = [1, 2, 4, 10];

const summedNums1 = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()

console.log(summedNums1); // Output: 117

//excercise
let newNumbers = [1,3,5,7];

let reduced_number = newNumbers.reduce((accumulator, currentValue)=>{
    console.log('The value of accumulator::::::::::::::::::::  ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator+currentValue
},10 ) // if you want it ti start the accumulator at 10 
console.log(reduced_number)


//creating object
let ali = {name:'ali'}
console.log("I am from the object created called: " + ali.name) // the first way of accessing the object is to use the .(dot) function
// the second way of accessing the bracet by usig the bracket notation
console.log("I am from the object created called: " + ali['name'] + " as the second notation") 

// excercise
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
//Reassign the color property of the spaceship object to have a value of 'glorious gold'
spaceship['color'] = 'glorious gold'
//Without changing lines 1 - 6, add a numEngines property with a numeric value between 1 and 10 to the spaceship object.
spaceship['numEngines']=9
//Use the delete operator to remove the 'Secret Mission' property from the spaceship object.
delete spaceship['Secret Mission']



//objects plus methods
let retreat_message = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

//Below the retreatMessage variable in the code editor, create an alienShip object. It should contain a method .retreat() which will console.log() the retreatMessage.
// Add another method to your object literal. This method, .takeOff(), should console.log() the string 'Spim... Borp... Glix... Blastoff!'.
let alienShip ={
  retreat(){
    console.log(retreat_message)
  },
  take_off()
  {
    console.log("Spim... Borp... Glix... Blastoff!")
  }
}

alienShip.retreat()
alienShip.take_off()


//nested objects 
let spaceship2 = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    backup: {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 
// Create a variable capFave and assign the captain‘s favorite food (the element in the 0th index of her 'favorite foods' array) to it. 
// Make sure to use bracket and dot notation to get the value of the food through nested access (don’t just copy the value into the variable!)
let capFave = spaceship2.crew['captain']['favorite foods'][0]
console.log(capFave)
//Right now the passengers property has a value of null. Instead, assign as its value an array of objects. These objects should represent 
//the spaceship‘s passengers as individual objects. Make at least one passenger object in the array that has at least one key-value pair on it
spaceship2.passengers = [{
  name:"issack",
  destination : 'nairobi'
}]
// Create a variable firstPassenger and assign the first passenger as its value (the element in the 0th index of the spaceship.passengers array you just made). 
// Make sure to use bracket and dot notation to get the passenger object through nested access (don’t just copy the object into the variable!)
 let firstPassenger = spaceship2.passengers[0]


 //pass by Reference
 const spaceship3 = {
  homePlanet : 'Earth',
  color : 'silver'
};

let paintIt = obj => {
  obj.color = 'glorious gold'
};

paintIt(spaceship3);
console.log(spaceship.color + " -----------------from the referenced object ") // Returns 'glorious gold'

//excercises

let spaceship4 = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

//Write a function greenEnergy() that has an object as a parameter and sets that object’s 'Fuel Type' property to 'avocado oil'.
let greenEnergy = change=>{
  change['Fuel Type'] = 'Avocado Oil';
}
greenEnergy(spaceship4);
console.log("i ahve changed the fuel type by using reference ==================="+spaceship4['Fuel Type'])
//Write a function remotelyDisable() that has an object as a parameter and sets (or reassigns) that object’s disabled property to true.
let remotelyDisable = obj1 =>{
  obj1.disabled = true
}
remotelyDisable(spaceship4)
console.log(spaceship4)



//looping through the project
let spaceship5 = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 
// for...in
for (let crewMember in spaceship5.crew) {
console.log(`${crewMember} = ${spaceship5.crew[crewMember].name}`)
};

//examples on object loop
for(let alii in spaceship5.crew){
  console.log(`${alii} ========= ${spaceship5.crew[alii].degree}`)
}



// Global scope
 var a = 1;
 let b = 2;
 const c = 3;

 function test()
 {
   var a = 4;
   let b = 5;
   const c = 6;

   console.log('functional variable : ', a,b,c);
 }
 //test();

 if(true)
 {
   //block scope
   var a = 4;
   let b = 5;
   const c = 6;

   console.log(' if scope : ', a,b,c);
 }
 console.log('Global sace : ', a,b,c);