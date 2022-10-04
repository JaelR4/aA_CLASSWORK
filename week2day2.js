// function catBuilder(name, color, toys){
//     let cat = {
//             name : name,
//             color : color,
//             toys : toys,
//     }
//     return cat
// }
// console.log(catBuilder("whiskers", "black" , "toys"))

// function catBuilder(name, color, toys){
//     return{
//         name: name,
//         color : color,
//         toys : toys,

//     }
// }
// console.log(catBuilder("whiskers", "black" , "toys"))

// function laligatSum(num)

// function isPrime(num){
//     if (num < 2) return false
//     for (let i=2; i < num; i++){
//         if (num % i === 0) {
//             return false
//         }
//     }
//     return true;
// }
// function laligatSum(num){
//     let sum = 0;
//     for (let i = 2; i <= num; i++){
//         if (isPrime(i)){
//             sum +=i
//         }
//     }
// return sum
// }

// console.log(laligatSum(10))
// console.log(laligatSum(17))

let cat = {
    name : "whiskers",
    color: "black",
    toys :{
        outside:['ball', 'whisthle'],
        inside:['blanket']
    }
}
cat ["name"] = 'Jael'
cat["age"] = "21"
 console.log(cat)
 console.log(cat["color"])
        
 
 console.log(cat.test) // UNDEFINED
 let test = "name"
 console.log(cat[test])
 console.log(cat.test)