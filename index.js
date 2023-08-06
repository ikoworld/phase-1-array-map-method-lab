const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


//i need to split all the string in the array using split method
/*const splitString= tutorials.map(string =>string.split(" "));
//console.log(splitString);
//i have now to capitalize the first letter of every word using charAt() + we have to join the words 
const capitalize =splitString.map(title=>title.map(word=>word.charAt(0).toUpperCase()+word.slice(1)));
//console.log(capitalize);
const join = capitalize.map(title=>title.join(" "));*/

/*const titleCased= function(tutorials) {
  tutorials.map(title =>
    {return title.split(" ").map(string=>{
      return string.charAt(0).toUpperCase()+string.slice(1);})
      .join(" ")
    ;

  });
return tutorials;
}
console.log(titleCased(tutorials));*/




const titleCased = ()=> {
  return tutorials.map(title => {
    return title
      .split(" ")
      .map(string =>string.charAt(0).toUpperCase() + string.slice(1))
      .join(" ");
  })

};

console.log(titleCased(tutorials));

