// Example 1
// var firstName = "Naima";
// var lastName = "Ahmad";
// console.log(firstName + " " + lastName);

// Example 2
// var num = "2";
// var num2 = "2";
// console.log(num+num2);
// var num = 2;
// var num2 = "2";
// console.log(num+num2);
// var num = "2";
// var num2 = 2;
// console.log(num+num2);

// Example 3
// var num = 2;
// var num2 = "2";
// console.log(num+num2+2);
// var num = 2;
// var num2 = "2";
// console.log(2+num+num2);

// Example 4
// console.log(prompt("Enter you Name:","Naima Ahmad"));

// Example 5
// var userName = prompt("Enter you Name:","Naima Ahmad");
// console.log(userName);

// Example 6
// var num1 = prompt("Enter first Number:");
// var num2 = prompt("Enter second Number:");
// console.log(num1+num2)

// Example 7
// var num1 = +prompt("Enter first Number:");
// var num2 = +prompt("Enter second Number:");
// console.log(num1+num2)

// Example 8
// var age = +prompt("Enter you age:");
// if(age >= 20){
//     console.log("Eligible");
// }
// else{
//     console.log("Not eligible");
// }

// Example 9
// var marks = +prompt("Enter you marks:");
// if(marks >= 50){
//     console.log("Passed");
// }
// else{
//     console.log("Fail");
// }

// Example 10
var perc = +prompt("Enter your percentage:");
if(perc >= 90 && perc <= 100){
console.log("A+")
}
else if(perc >= 80 && perc <= 90){
    console.log("A")
}
else if(perc >= 70 && perc <= 80){
    console.log("B")
}
else if(perc >= 60 && perc <= 70){
    console.log("C")
}
else if(perc >= 50 && perc <= 60){
    console.log("D")
}
else if(perc >= 40 && perc <= 50){
    console.log("E")
}
else{
    console.log("F")
}