var nname = prompt ("Please Enter Your Name: ", " ");
var hheight = prompt ("Please Enter Your Height: ","");
var wait = prompt ("Please Enter Your Weight: "," ")
var feetfake = hheight/12;
var feetfakeagain = feetfake%1
var feetreal = feetfake-feetfakeagain;
var inch = hheight%12;
var waitagain = wait * 2.20462;
var waitlagiba= waitagain%1
var waitreal = waitagain - waitlagiba

alert("Name: " + nname + "\nHeight: " + feetreal + " feet and " + inch + " inches" + "\nWeight: " + waitreal +" lb" )

var firstname = prompt("Please Enter Your First Name: ")
var lastname = prompt("Please Enter Your Last Name: ")
var birthyear = prompt("Please Enter Your Birth Year: ")
age = 2024-birthyear;

document.getElementById("cout").innerHTML = "Hello, " + firstname + " " + lastname + "!" + "How does it feel to be " + age + " years old?";


function myFunction(){
    if(confirm("Do you consent sharing your personal information in this website?")){
        alert("Name: " + nname + "\nHeight: " + feetreal + " feet and " + inch + " inches" + "\nWeight: " + waitreal +" lb" )
    }

    else{
        alert("User does not want to share his/her information.")
    }
}