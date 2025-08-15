const add = (num1, num2)=>num1 + num2;
const subtract = (num1, num2)=>num1 - num2;
const multiply = (num1, num2)=>num1 * num2;

const divide = (num1, num2)=>{
    if (num2 === 0){
        alert("Cannot divide by 0!");
        return;
    }else{
        return num1 / num2;
    }
}

const operate = (operator, num1, num2)=>{
    switch(operator){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
        case 'x':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            alert("Invalid operator! Please use +, -, * or /")
    }
}