// Example 1
// var Name = prompt("Enter your Name: ","Naima Ahmad");
// console.log(Name);

// Example 2
// var phone = +prompt("Enter your Phone Number:","+923");
// console.log(phone);

// Example 3
// var marks = +prompt("Enter your Marks:");
// if(marks >= 50){
//     console.log("Pass")
// }
// else{
//     console.log("Fail")
// }

// Example 4
// var firstNum = +prompt("Enter a first number:");
// var secondNum = +prompt("Enter a second number:");
// console.log(firstNum+secondNum);

// Example 5
var num1 = +prompt("First Number:");
var num2 = +prompt("Second Number:");
var opr = prompt("Operator:");
if(opr == "+"){
    console.log("The addition of "+num1+" + "+num2+" = ",num1+num2);
}
else if (opr == "-"){
    console.log("The subtraction of "+num1+" - "+num2+" = ",num1-num2);
}
else if (opr == "*"){
    console.log("The multiplication of "+num1+" * "+num2+" = ",num1*num2);
}
else if (opr == "/"){
    console.log("The division of "+num1+" / "+num2+" = ",num1/num2);
}
else{
    console.log("Enter only basic arithmetic operator")
}