// Challenge 1: Store the string "I am a" in one variable and store the other string "Kalvian" in other variable and concatenate both the string to get the output as "I am a Kalvain" using "+" operator.
var nameone='I am a ';
var nametwo='Kalvian';
console.log(nameone+nametwo);

// Challenge 2: Store the given string in a variable and print the same in console. String: If you fail, never give up because FAIL means "First Attempt In Learning".
var chaltwo='If you fail, never give up because FAIL means "First Attempt In Learning';
console.log(chaltwo);

// Challenge 3: Store a string in a variable and display the length of the string.
var chalthree='satyam';
console.log(chalthree.length);

// Challenge 4: Store a string in a variable and convert it into uppercase.
var chalfour='kalvium';
console.log(chalthree.toUpperCase());

//Challenge 5: Store the string "I love programming" in a variable and replace the word programming with "JavaScript programming".
var chalfive='I love programming';
console.log(chalfive.replace(/programming/g,'JavaScript programming'));

// Challenge 6: Store a string in variable and print the string in console 3 times using repeat method.
var chalsix='kalvium ';
console.log(chalsix.repeat(3));

//Challenge 7: Store the string as "I am a Kalvian" in a variable and convert the string into array and print the array in console.
var chalseven='I am a Kalvian';
var arryseven=chalseven.split(' ');
console.log(arryseven);


// Challenge 8: Store the given string "Time and Tide wait for none" in a variable and using indexOf method find the index of "Ti" and print the same in console.
var chaleight='Time and Tide wait for none';
console.log(chaleight.indexOf("Ti"));


// Challenge 9: Store the given string "When life gives you lemons make lemonade" in a variable and find whether it includes "lemon".
var chalnine='When life gives you lemons make lemonade';
console.log(chalnine.includes('lemons'));

// Challenge 10: Store the given string "You must be the change you wish to see in the world." in a variable and use slice to console log the word "change" and use substring method to console log the word "world".
var chalten="You must be the change you wish to see in the world";
console.log(chalten.indexOf('change'));
console.log(chalten.slice(16,22));
console.log(chalten.indexOf('world'));
console.log(chalten.substring(46,51));