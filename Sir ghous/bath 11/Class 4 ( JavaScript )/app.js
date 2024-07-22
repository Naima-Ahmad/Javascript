// Example 1
// alert("Naima");
// alert(2+2);

// Example 2
// console.log(2+2);

// Example 3
// var fullName = "Naima";
// var fullName = "Naima Ahmad";
// console.log(fullName)

// Example 4
// var firstName = "Naima";
// var lastName = "Ahmad";
// console.log(firstName+" "+lastName);

// Example 5
// var num1 = 20;
// var num2 = 30;
// var restult = num1+num2;
// console.log(restult)

// Example 6
// var num1 = 20;
// var num2 = 30;
// var plus = num1+num2;
// var minus = num1-num2;
// var multiply = num1*num2;
// var divide = num1/num2;
// console.log(num1+" + "+num2+" = ",plus);
// console.log(num1+" - "+num2+" = ",minus);
// console.log(num1+" * "+num2+" = ",multiply);
// console.log(num1+" / "+num2+" = ",divide);

// Example 7
// var a = 5;
// var b = a++; // post increment
// console.log("a = ",a);
// console.log("b = ",b);
// console.log("");
// var a = 5;
// var b = ++a; // pre increment
// console.log("a = ",a);
// console.log("b = ",b);

// Example 8
// var num1 = 10;
// var num2 = 5;
// if(num1 > num2){
//     console.log(num1+" is greater than "+num2)
// }
// else{
//     console.log(num1+" is less than "+num2)
// }

// Example 9
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