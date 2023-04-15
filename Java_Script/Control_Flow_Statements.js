// ----------------- Condition In Js ----------------


// -----------  1> If else condition  ----------------

// eg: Find the no is even or odd.
/*no = 50
if(no%2==0)
{
    console.log("No is even")
}
else 
{
    console.log("No is odd")
}*/

// ------------  2> Else If condition or If else ladder  ---------------

// eg: Find the marks are 0-25= less ,26-50 = avreage otherwise  more.
/*marks = 24
if(marks<=25){
    console.log("Less")
}
else if(marks<=50){
    console.log("Average")
}
else{
    console.log("More")
}*/

// -----------------  3> Nested if  ---------------------
//eg: IF the person is indian & age is greater than 18 it has right to vote.
/*age = 19
country = "India"
if(country=="India"){
    if(age<18){
        console.log("You are Minor so, you can't vote")
    }
    else{
        console.log("You can vote")
    }
}
else{
     console.log("Your are not an indian so, you can't vote")
}*/

// ------------------  4> Switch  --------------------

//eg: Choose the day
/*let day
switch(new Date().getDay()){
    case 0:
        day = "Sunday"
        break 
    case 1:
        day = "Monday" 
        break
    case 2:
        day ="Tuesday"
        break
    case 3:
        day = "Wednesday"
        break
    case 4:
        day = "Thrusday"
        break
    case 5:
        day ="Friday"
        break
    case 6:
        day = "Saturday"
        break
}
console.log(new Date().getDay())*/
// let x = new Date().getDay()
// console.log(x)
// Here day is check today is which day ie 1st day is sunday 2nd is Tuesday and last
//7th day is saturday it will start 0 if we start 2 it gives error.
