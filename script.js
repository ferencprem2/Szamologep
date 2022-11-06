let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let result;
document.getElementById("addition").addEventListener("click", function(e){
    e.preventDefault();
    result = parseFloat(firstNumber.value)+parseFloat(secondNumber.value);
    document.getElementById("result").innerHTML = result;
    
});
document.getElementById("deduction").addEventListener("click", function(e){
    e.preventDefault();
    result = parseFloat(firstNumber.value)-parseFloat(secondNumber.value);
    document.getElementById("result").innerHTML = result;
    
});
document.getElementById("multipli").addEventListener("click", function(e){
    e.preventDefault();
    result = parseFloat(firstNumber.value)*parseFloat(secondNumber.value);
    document.getElementById("result").innerHTML = result;
    
});
document.getElementById("devide").addEventListener("click", function(e){
    e.preventDefault();
    result = parseFloat(firstNumber.value)/parseFloat(secondNumber.value);
    document.getElementById("result").innerHTML = result;
    
});
