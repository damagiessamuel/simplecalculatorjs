const number1 = parseFloat(prompt ('Type the first number for SmallSamuels calculator: ')); 
const operator = prompt('Abundant Minute Operator: Type in an oepration to start a calculation ( either +, -, * or / ): ');  
  
const number2 = parseFloat(prompt ('Type the Second number for SmallSamuels calculator: '));  
  
let result; 
  

if (operator == '+') { 
    result = number1 + number2;  
}  
else if (operator == '-') {
    result = number1 - number2;  
}  
else if (operator == '*') { 
    result = number1 * number2;  
}  
else {  
    result = number1 / number2; 
}  
  
  
window.alert(" This is the result on SmallSamuel's Calculator Result is" :  + result);  
