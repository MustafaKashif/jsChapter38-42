//! Chapter No. 38-42

// Question No. 01

// var a = parseInt(prompt("Enter the base number : "));
// var b = parseInt(prompt("Enter the power/exponent : "));
// function power(){
//   var power = Math.pow(a, b);
//   document.write("The answer is : "+power);
// }
// power();

// Question No. 02

// var year = parseInt(prompt("Enter the year that you want to check : "));
// function leapYear(){
//     if( (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0) )
//     {
//         document.write(year+" is a leap year");  
//     }
//     else
//     {
//         document.write(year+" is not a leap year");  
//     }
// }
// leapYear();

// Question No. 03

// var a = Number(prompt("Enter the first side of the triangle : "));
// var b = Number(prompt("Enter the second side of the triangle : "));
// var c = Number(prompt("Enter the third side of the triangle : "));
// function calS(){
//     var cal = (a + b + c)/2;
//     return cal;
// }
// var s = calS();
// document.write("The value of s is : "+s);
// function calArea(){
//    var area =  s*(s - a)*(s - b)*(s - c);
//    document.write("The area of triangle is : "+area);
// }
// document.write("<br>")
// calArea();

// Question No. 04

// var subjectOne = parseInt(prompt("Enter the marks of subject One : "));
// var subjectTwo = parseInt(prompt("Enter the marks of subject Two : "));
// var subjectThree = parseInt(prompt("Enter the marks of subject Three : "));
// function main(){
//     function average(){
//         var av = (subjectOne + subjectTwo + subjectThree)/3;
//         document.write("The average is : "+av);
//     }
//     average();
//     document.write("<br>");
//     function percentage(){
//         var per = (subjectOne + subjectTwo + subjectThree)*100/300;
//         document.write("The percentage is : "+per);
//     } 
//     percentage();
// }
// main();

// Question No. 05

//  var string = "My name is Mustafa kashif. I am currently pursuing my degree of Software engineering."
//  string = string.toLowerCase();
//  function indexOf(findOut){
//     document.write(findOut+" "+"is available at index : "+string.indexOf(findOut));
//  }
//  indexOf("software");

// Question No. 06

// var string = "Mustafa Kashif mehmood";
// function deleteVowel(){
//    var del = string.replace(/[aeiou]/g, "");
//    document.write("String without vowel is : "+del); 
// }
// deleteVowel();

// Question No. 08

// var distanceInKm = parseInt(prompt("Enter the distance in kilometeres : "));
// function meter(){
//     var dm = distanceInKm * 1000;
//     document.write("The distance in meters is : "+dm+" "+"meters");
// }
// function feet(){
//     var df = distanceInKm * 3280.84;
//     document.write("The distance in feet is : "+df+" "+"feet");
// }
// function inches(){
//     var di = distanceInKm * 39370.1;
//     document.write("The distance in inches is : "+di+" "+"inches");
// }
// function centiMeters(){
//     var dcm = distanceInKm * 100000;
//     document.write("The distance in centimeters is : "+dcm+" "+"Centimeters");
// }
// meter();
// document.write("<br>");
// feet();
// document.write("<br>");
// inches();
// document.write("<br>");
// centiMeters();
// document.write("<br>");

// Question No. 09

// function overTime(workTime){
//     if(workTime == 40){
//         document.write("No overtime done ! Hence no extra payment");
//     }
//     else if(workTime > 40){
//        var hours = (workTime - 40) * 12;
//        document.write("This employee worked for extra"+" "+(workTime - 40)+" "+"Hours");
//        document.write("<br>The overtime payment is : "+hours+" "+"Rupees");
       
//     }
// }
// overTime(50);
// document.write("<br>");
// overTime(40);

// Question No. 10

// var input = Number(prompt("Enter the Amount to with draw !! "));
// var amount = input.toString();
// function withDrawl(){
//    var hundred = amount.slice(0,1);
//    var fifty = amount.slice(1,2);
//    var tens = amount.slice(2,3);
//    document.write("You will have "+" "+hundred+" "+"hundred notes"+" "+fifty+" "+"fifty notes"+" "+tens+" "+"ten notes");
// }
// withDrawl();

//! Chapter No. 38 - 42 completed