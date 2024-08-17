// Example 1
// var arr = [2, 6, 4, 1, 3, 5];
// console.log(arr.sort())

// Example 2
// var arr = ['Hammad', 'Jawad', 'Hashir', 'Haris', 'Zohaib'];
// console.log(arr.join())
// console.log(arr.join('&'))
// console.log(arr.join(' '))

// Example 3
// var str = "Hammad&Jawad&Hashir&Haris&Zohaib";
// console.log(str.split('&'))
// var str = "Hammad Jawad Hashir Haris Zohaib";
// console.log(str.split(' '))
// var str = "Hammad Jawad-Hashir=Haris Zohaib";
// console.log(str.split(' '));

// Example 4
// var arr = ['Hammad', 'Jawad', 'Hashir', 'Haris', 'Zohaib'];
// var met = arr.reverse();
// console.log(met);
// met = arr.reverse('$');
// console.log(met);

// Example 5
// var arr = ['Hammad', 'Jawad', 'Hashir', 'Haris', 'Zohaib'];
// var ab = arr.reverse().join(" ")
// console.log(ab)

// Example 6
// var cities = ['rawalpindi', 'islamabad', 'swat', 'sargodha'];
// var userCity = prompt("Enter your city Name: ");
// if(cities[0] == userCity){
//     alert("True")
// }
// else if(cities[1] == userCity){
//     alert("True")
// }
// else if(cities[2] == userCity){
//     alert("True")
// }
// else if(cities[3] == userCity){
//     alert("True")
// }
// else{
//     alert("False")
// }

// Example 7
// for(var i = 0; i < 10; i++){
//     console.log(i)
// }

// Example 8
// for(var i = 1; i <= 10; i++){
//     document.write(2+" x "+i+" = "+2*i+"<br>")
// }

// Example 9
var arr = ["Naima", "Laiba", "Hooriya", "Maria", "Musqan"];
for(var i = 0; i < arr.length; i++){
    document.write("<h1>"+arr[i]+"</h1>")
}