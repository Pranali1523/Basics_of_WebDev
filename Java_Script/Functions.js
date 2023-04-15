// ----------------- Normal Function ---------------------

/*function formula(a,b,c){
    return((a**3)+(b**3)+((2*a*b)**2)+((2*b*c)**2)+((2*a*c)**2))
}
console.log(formula(2,3,1))*/


// Normal function by using nested function

/*function formula(a,b,c){
    function square(no){
        return no*no
    }
    function cube(no){
        return no*no*no
    }
    no1 = cube(a)
    no2 = cube(b)
    no3 = cube(c)
    a1 = 2*a*b
    a2 = 2*b*c
    a3 = 2*a*c
    ans1 = square(a1)
    ans2 = square(a2)
    ans3 = square(a3)
    return no1+no2+ans1+ans2+ans3  
}
console.log(formula(1,1,1))*/


// Normal Function using call back function

/*function formula(a,b,c,a1,a2,a3,square,cube){
    console.log(cube(a)+cube(b)+square(a1)+square(a2)+square(a3))
    square(a1)
    square(a2)
    square(a3)
    cube(a)
    cube(b)
}
function square(no){
    no1 = no*no
    return no1
}
function cube(no){
    no1 = no*no*no
    return no1
}
formula(1,1,1,a1=2*1*1,a2=2*1*1,a3=2*1*1,square,cube)*/



// ----------------  Arrow function  -----------------------

// const formula =(a,b,c) => ((a**3)+(b**3)+((2*a*b)**2)+((2*b*c)**2)+((2*a*c)**2))
// console.log(formula(1,1,1))

// Function Expressiion
// let x = function(a,b,c){
//     return((a**3)+(b**3)+((2*a*b)**2)+((2*b*c)**2)+((2*a*c)**2))
// }
// console.log(x(1,1,1))


//Write a function that takes the base and height of a triangle and return its area.
// Examples
// triArea(3, 2) ➞ 3
// triArea(7, 4) ➞ 14
// triArea(10, 10) ➞ 50
// Notes
// The area of a triangle is: (base * height) / 2

// 1> Using Normal Function
/*function triArea(base,height){
    console.log((base*height)/2)
}
triArea(3,2)*/

// 2> Arrow Function
/*let triArea=(base,height) =>((base*height)/2)
console.log(triArea(7,4))*/

// 3> Function Expression
/*const a = function(base,height){
    return ((base*height)/2)
}
console.log(a(10,10))
*/


// Convert Minutes into Seconds
// Write a function that takes an integer minutes and converts it to seconds.
// Examples
// convert(5) ➞ 300
// convert(3) ➞ 180
// convert(2) ➞ 120
// 1> Normal Function
/*function mintosec(min){
    return (min*60)
}
console.log(mintosec(5))*/

// 2> Arroe Function 
/*const mintosec=(min) => min*60
console.log(mintosec(3))*/

// 3> Function Expression
/*let mintosec = function(min){
    return min*60
}
console.log(mintosec(2))*/
