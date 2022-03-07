// //1 declare a string to run the count logic over
// const theString = 'the dog jumped over the lazy moon';

// //2. Create an object to keep track of all the counts
// const characterCount = {};

// //3 Loop over each character of the string
// for (const character of theString){
// //4. increment the character count in the object we initialized
// if(characterCount[character] === undefined ){
//     characterCount[character] = 0;
// }
// characterCount[character]++;
// }

// //5 print out the count object
// console.log(characterCount)



// let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// let wordCount = {};

// for(const letter of retreatMessage){
//     if(wordCount[letter] === undefined){
//         wordCount[letter] = 0;
//     }
//     wordCount[letter]++;
// }

// console.log(wordCount);

const user = {

    name: 'John Doe',

    email: 'john.doe@example.com',

    age: 25,

    dob: '08/02/1989',

    active: true
};

// iterate over the user object       // Can not use arry methods forEach()/map() - will get error

for(const key in user){
    console.log(`${key} : ${user[key]}`);
}


console.log("===================================")
console.log("======  Object.keys(obj)    ========")
console.log("===================================")


const keys = Object.keys(user);          //change object to arry of keys
console.log(keys);
keys.forEach((key, index)=>{            // iterate trough arry with arry method forEach();
    console.log(`${key} : ${user[key]}`); // user.[key] equal the value of key bc in brackets[]
})

 // combine and set to a variable and turn to an Array of values then printing to console.
 console.log("----------------------------------------------------------------")
 console.log('Combine and set to a variable and turn to an Array of values then printing to console.')
const keys2 = Object.keys(user).forEach((key, value)=>console.log(`${key} : ${user[key]}`));
console.log("----------------------------------------------------------------")


console.log("===================================")
console.log("======  Object.values(obj)  =======")
console.log("===================================")

 // combine and set to a variable and turn to an Array of values then printing to console.
const values = Object.values(user).forEach(value=>console.log(value));  // combine and set to a variable and turn to an Array of values then printing to console.
console.log(values);


console.log("===================================")
console.log("======  Object.enteries(obj)=======")
console.log("===================================")

//To loop over the array returned by Object.entries(), you can either use the for...of loop or the forEach() method as shown below:

const entries = Object.entries(user);
console.log(entries);

//for...of loop;
console.log("------ for..of loop    --------------------------------------------------")
for([key , value] of entries ){
    console.log(`${key}: ${value}`);
}

// forEach():
console.log("------ forEach()    --------------------------------------------------")
const entries2 = Object.entries(user).forEach((key, value)=>console.log(`${key}: ${value}`))
