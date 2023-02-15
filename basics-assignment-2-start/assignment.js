const task3Element = document.getElementById('task-3');

function greet(){
    alert('Good Morning');
}
function greetUser(userName){
    alert('hi'+' '+ userName)
}
function concatenation(str1,str2,str3){
    return str1+' '+str2+' '+str3;
}
//direct calling
greet();
greetUser('Rena');
result = concatenation('hello','hai','bye');
alert(result);

//indirect calling
task3Element.addEventListener('click',greet)


