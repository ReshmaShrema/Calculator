// alert('hello')

/*variable
let name="rena";
let name='Ram';//error let could not allow redeclaration of same variable(SyntaxError: Identifier 'name' has already been declared)
name='Ram';
const pi=3.14;
pi=88;//error(TypeError: Assignment to constant variable.)*/

/*let currentResult = 0;
currentResult=(currentResult+10)*3/2-1;
outputResult(currentResult,' ');*/

const defaltResult = 0;
let currentResult = defaltResult;
let currentResultString;

// function add(num1,num2){
//     result = num1 + num2;
//     stringify(num1, num2, '+', result);
//     console.log('dfdf')
//     return result;
// }
function add(){
    //value from input is always strin type
    currentResult = currentResult + Number(userInput.value);
    //execute whenever user click the button
    outputResult(currentResult, currentResultString);
}
function subtract(num1,num2){
    result = num1-num2;
    stringify(num1,num2,'-',result)
    return result;
}
 function stringify(num1,num2,operator,result){
    currentResultString=`${num1} ${operator} ${num2} = ${result}`;
 }
 addBtn.addEventListener('click',add)
//currentResult = add(4,3);


//currentResult =(currentResult+10)*3/2-1;
//let currentResultString='('+defaltResult+'+10)*3/2+1'
//let currentResultString = `( + ${defaltResult} + +10)*3/2+1`;


//outputResult(currentResult,currentResultString)