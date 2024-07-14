// Example 1

// var totalCoast = 1 + (3 * 4) ", totalCoast)


// Example 2

// var city = prompt("Enter your city Name :")
// console.log("city ===> ",city)


// Example 3

// var gender = prompt("Enter your gender :")
// if(gender == "Female"){
//     document.write("Hello, Sister")
// }
// else{
//     document.write("Hello, Sir")
// }


// Example 4

// var education = prompt("Enter your education?")
// if(education != "matric"){
//     document.write("Eligible")
// }


// Example 5

var language = prompt("Enter language Name: ")

if(language === "javascript"){
    var city = prompt("Enter your city Name: ")
    if(city === "rawalpindi"){
        var experience = prompt("Enter your Experience: ")
        if(experience >= 2+" years"){
            console.log("Congratulations, Hired")
        } else{
            console.log("or par ka ana")
        }
    } else{
        console.log("rawalpindi ajao")
    }
} else{
    console.log("javascript sikho")
}