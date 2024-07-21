// Example 1
// var firstNum = +prompt("Enter first Number:");
// var secondNum = +prompt("Enter second Number:");
// console.log(firstNum + secondNum);

// Example 2
var num1 = +prompt("First Number:");
var num2 = +prompt("Second Number:");
var opr = prompt("Operator:");
if(opr == "+"){
    document.write("The sum of "+num1+" + "+num2+" = ",num1+num2);
}
else if (opr == "-"){
    document.write("The sub of "+num1+" - "+num2+" = ",num1-num2);
}
else if (opr == "*"){
    document.write("The sub of "+num1+" * "+num2+" = ",num1*num2);
}
else if (opr == "/"){
    document.write("The sub of "+num1+" / "+num2+" = "+num1/num2);
}