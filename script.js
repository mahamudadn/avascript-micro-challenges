// lets define the yourFuntion.
// returned the value 

function addNumbers(num1, num2) {

    return num1 + num2;
}


let result = addNumbers(2, 3);
console.log('adding 2 & 3 will give us ' ,result); // should log out 5

// adding 2 and 7 and 
 result = addNumbers(2, 7);
console.log('adding 2 & 7 will give us' , result);// should log out 9

// created afunction that compares values
// loged out to see the result.

function compareNumbers(firstNumer, secondNumber) {
    if (firstNumer > secondNumber){
        return "The first number was bigger!";
    }
   else if (firstNumer < secondNumber) {
    return "The second number was bigger!";
}
   else (firstNumer === secondNumber); {
    return "The numbers are the same!";
 
}
}
// first is greater than second
console.log(compareNumbers(3,2));

// second is greater than first
console.log(compareNumbers(2,7));

// first is equal to  second
console.log(compareNumbers(7,7));

