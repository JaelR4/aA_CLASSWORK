// function catBuilder(name, color, toys){
//     let cat = {
//             name : name,
//             color : color,
//             toys : toys,
//     }
//     return cat
// }
// console.log(catBuilder("whiskers", "black" , "toys"))

function catBuilder(name, color, toys){
    return{
        name: name,
        color : color,
        toys : toys,

    }
}
console.log(catBuilder("whiskers", "black" , "toys"))