//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let x = "Hello Max, my name is Dog, and I have purple eyes!"
let y = ["Max","HAS","PuRple","dog"]

function findWords(dog_string, dog_names){
    var dog_string = dog_string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    var dog_string = dog_string.toLowerCase();
    const myArray = dog_string.split(" ");
    for (let i = 0; i < dog_names.length; i++) {
         if(myArray.includes(dog_names[i].toLowerCase())){
            console.log('Matched dog_name')
         }
         else{
            console.log('No matches')
         }
      } //Your code goes here
}
findWords(x, y)
//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(x){
    for (let i = 0; i < x.length; i++){
        if(i % 2 == 0){
            x.splice(i, 1, 'even index')
        }
    }
    console.log(x)
}
replaceEvens(arr)
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


//--------------Four CodeWars problems previously done in Python-------------//



//--------------Multiples of 3 or 5----------//
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
//The sum of these multiples is 23.
//Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//Additionally, if the number is negative, return 0 (for languages that do have them).
//Note: If the number is a multiple of both 3 and 5, only count it once.
function solution(number){
    let multiples =  []
    for (let i = 0; i < number; i++){
        if(i % 3 == 0 || i % 5 == 0){
            multiples.splice(i, 0, i)
        }
    }
  console.log(multiples)
  console.log(multiples.reduce((partialSum, a) => partialSum + a, 0))
  return multiples.reduce((partialSum, a) => partialSum + a, 0)
}

solution(10)

//Original solution
//def solution(number):
//    multiples =  []
//    for i in range(number):
//       if i % 3 == 0 or i % 5 == 0:
//            multiples.append(i)
//    return sum(multiples)
  




//------------Jaden casing strings-----------//

//Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). 
//Jaden is also known for some of his philosophy that he delivers via Twitter. 
//When writing on Twitter, he is known for almost always capitalizing every word. 
//For simplicity, youll have to capitalize each word, check out how contractions are expected to be in the example below.
//Your task is to convert strings to how they would be written by Jaden Smith. 
//The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

String.prototype.toJadenCase = function () {
    console.log(this)
    let words = this.split(" ");
    var sentence = "";
    if(this){
      for(let i = 0; i < words.length; i++){
        var word = words[i].toLowerCase()
        var word = word[0].toUpperCase() + word.slice(1,word.length) + " "
        var sentence = sentence + word
      }
      sentence = sentence.trim()
    }
    return sentence
  };

//Original solution
//def to_jaden_case(string):
//    words = string.split(" ")
//    sentence =  ""
//    if string:
//        for word in words:
//            word = word.lower()
//            word = word[0].upper() + word[1::] + ' '
//            sentence = sentence + word
//        sentence = sentence.rstrip()    
//    return sentence





//----------Unique in order----------//
//Implement the function unique_in_order which takes as argument a sequence
//and returns a list of items without any elements with the same value next 
//to each other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
    const list = [];
    for(let i = 0; i < iterable.length; i++){
      try{
        if(iterable[i] != iterable[i+1]){
          list.push(iterable[i]);
          console.log(list);
        }}catch{
          list.push(iterable[i]);
          return list
        }
      }
    return list
  }

//Original Solution
//def unique_in_order(sequence):
//    list = []
//    for i in range(len(sequence)):
//        try:
//            if sequence[i] != sequence[i+1]:
//                list.append(sequence[i])
//        except:
//            list.append(sequence[i])
//            return list
//    return list




//--------Get the Middle Character-----------//
//You are going to be given a word.
//Your job is to return the middle character of the word. 
//If the word's length is odd, return the middle character. 
//If the word's length is even, return the middle 2 characters.
function getMiddle(s)
{
  if(s.length % 2 != 0){
    return s[Math.floor(s.length/2)]
  }
  return s[Math.floor(s.length/2) -1] + s[Math.floor(s.length/2)]
}

//Original solution
//def get_middle(s):
//    if len(s) % 2 != 0:
//        return s[int(len(s)/2)]
//    else:
//       return s[int(len(s)/2)-1] + s[int(len(s)/2)]