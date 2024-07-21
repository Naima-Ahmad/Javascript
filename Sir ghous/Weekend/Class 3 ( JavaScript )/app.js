// Example 1
// var firstNum = +prompt("Enter first Number:");
// var secondNum = +prompt("Enter second Number:");
// console.log(firstNum + secondNum);

// Example 2
// var num1 = +prompt("First Number:");
// var num2 = +prompt("Second Number:");
// var opr = prompt("Operator:");
// if(opr == "+"){
//     document.write("The sum of "+num1+" + "+num2+" = ",num1+num2);
// }
// else if (opr == "-"){
//     document.write("The sub of "+num1+" - "+num2+" = ",num1-num2);
// }
// else if (opr == "*"){
//     document.write("The sub of "+num1+" * "+num2+" = ",num1*num2);
// }
// else if (opr == "/"){
//     document.write("The sub of "+num1+" / "+num2+" = "+num1/num2);
// }

// Example 3
var color = prompt("Enter traffic light signal colour:");
if(color == "red"){
    Swal.fire({
        imageUrl: "./images/file (1).png",
        title: "Red light on",
        text: "Wait a Minute",
    });
}

else if (color == "yellow"){
    Swal.fire({
        imageUrl: "./images/file (2).png",
        title: "Yellow light on",
        text: "Now Ready",
    });
}

else if (color == "green"){
    Swal.fire({
        imageUrl: "./images/file (3).png",
        title: "Green light on",
        text: "Now Go",
    });
}

else{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
}