
console.log("something".indexOf('m'))

if(!0){
    console.log('intheif')
} else {
    console.log('intheelse')
}

let num=20;
if(num=30){
    console.log('intheif')
}else{
    console.log("intheelse")
}

function foo(){
    return "bar";
}
console.log(foo())
console.log(foo)

function foo(p1,p2){
return p1 +" "+ p2
}
console.log(foo("jael" , "rod"))

let foo1 = function(){
    return 'bar'
}
console.log(foo1())

function average(num1,num2){
    console.log(num1)
    console.log(num2)
    let sum = num1+num2;
    let avg = sum/2;
    return avg
}
function average2(num1,num2){
    let sum = sumnums(num1,num2)
    let avg=sum/2
    return avg;
}
function sumnums(num1,num2){
    return num1 + num2
}
console.log(average(10, 6))
console.log(average2(44,6))
console.log(sumnums(3,5))

function isOdd(num) 
{
    console.log(true)
    if (num % 2===1) {
        return true
    } else {
       return false
        console.log(false)
    }
}


console.log(isOdd(10))
console.log(isOdd(2))
console.log(isOdd(3))
console.log(isOdd(5))
console.log(isOdd(7))
console.log(isOdd(56))

function plusFive (num) {
    return (5+num)
}
    console.log(plusFive(10))
    console.log(plusFive(20))
    console.log(plusFive(15))
    console.log(plusFive(30))

function threeOrSeven(num) {
    if (num % 3 === 0 || num % 7 === 0) {
        return true
    } else {
        return false
    }
}
console.log (threeOrSeven(60))

function hello(str) {
str=hello
}
console.log(str)