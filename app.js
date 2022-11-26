
let firstNumber = document.querySelector('.firNum');
let secondNumber = document.querySelector('.secNum');
let plus = document.querySelector('.plus');
let calc = document.querySelector('.calc');
let answer = document.querySelector('.res');
calc.addEventListener('click', sum);
function sum(){
    if(plus.textContent == '+' ){
        answer.textContent =
        parseFloat(firstNumber.value)+parseFloat(secondNumber.value)
    }else if(plus.textContent == '-'){
        answer.textContent =
        parseFloat(firstNumber.value)-parseFloat(secondNumber.value)
    }else if(plus.textContent == '*'){
        answer.textContent =
        parseFloat(firstNumber.value)*parseFloat(secondNumber.value)
    }else{
        answer.textContent =
        parseFloat(firstNumber.value)/parseFloat(secondNumber.value)
    }
};
plus.addEventListener('click', changeIt);
function changeIt(){
    if(plus.textContent == '+'){
        plus.textContent = '-'
    }else if(plus.textContent == '-'){
        plus.textContent = '*'
    }else if(plus.textContent == '*'){
        plus.textContent = '/'
    }else{
        plus.textContent = '+'
    }
   
}