function add(numOne, numTwo) {
    return numOne += numTwo
    }
    
    function subtract(numOne, numTwo) {
    return numOne -= numTwo
    }
    
     function multiply(numOne, numTwo) {
        return numOne *= numTwo
        }
    
    function divide(numOne, numTwo) {
        return numOne /= numTwo
        }
    
    


const inputOne =  prompt("Please enter a number")
const operational = prompt("Please enter an operational")
const inputThree = prompt("Please enter a number")

function calculate(inputOne, operational, inputThree){


if (operational === "+"){
    alert (add(Number(inputOne), Number(inputThree)))
    }
if (operational === "-"){
    alert (subtract(Number(inputOne), Number(inputThree)))
    }
if (operational === "*"){
    alert (multiply(Number(inputOne), Number(inputThree)))
    }
if (operational === "/"){
    alert (divide(Number(inputOne), Number(inputThree)))
    }

} 

calculate(inputOne, operational, inputThree)