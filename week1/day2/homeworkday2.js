function isOdd(num) {
    return (num % 2===0)
} 
console.log (isOdd(2));

function isOdd(num) {
    return (num % 2===0)
}
console.log (isOdd(5))

function isOdd(num) {
    return (num % 2===0)
}
 console.log (isOdd(-17))

function plusFive(num) {
    return (num + 5)
}
    console.log (plusFive(10))
    console.log (plusFive(2))
    console.log (plusFive(-8))


    function threeOrSeven(num) {
        return (num % 3===0 || 7===0 )
    }
    console.log(threeOrSeven(3))
    console.log(threeOrSeven(42))
    console.log(threeOrSeven(8))

    

function hello(str){
    var message = ('hello, ' + str)
    console.log(message)
}
hello('my guyzer')
hello('king')
hello('john')


function yell(str) {
    var allCaps = str.toUpperCase()
    return allCaps + '!!!'
}
console.log(yell('I want to go to the store'))

function yell(str) {
var allCaps = str.toUpperCase()
return allCaps + '!!!'
}
console.log(yell('I want to go to the store'))

function yell(str){
var allCaps = str.toUpperCase()
return allCaps + '!!!'
}
console.log(yell('I wnat to go the crib'))

function yell(str) {
    var allCaps = str.toUpperCase()
    return allCaps + '!!!'
}
console.log(yell('Hey How are you'))

function yell(str) {
    var allCaps = str.toUpperCase()
    return allCaps +'!!!'
}
console.log(yell('Hey my G'))

function isSubstring(searchstring, substring){
    if (searchstring.indexOf(substring)>-1) {
        return true
    } else {
        return false
    }
}
console.log (isSubstring(something))