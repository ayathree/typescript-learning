// ? "":"" -> ternary operator (decision making)


 const eligibleForMarriage =(age:number)=>{
    const result = age >= 21? "You are eligible":"You are not eligible"
    console.log(result)
 }
 eligibleForMarriage(20)



// ?? -> nullish coalescing operator(null/undefined er jonno kaj kore)


const userTheme = undefined
const selectedTheme=userTheme ?? "Light Theme";/* ekhane by default 'light theme' bose jabe cause userTheme = undefined, null holeo same kaj hoto */
console.log(selectedTheme)

const color = 'Green'
const selectedColor = color ?? 'White';/* ekhane green hobe cause color variable e value mane string er value deoa ache, null/undefine nei */
console.log(selectedColor)



// ?. -> optional chaining

const user :{
    address:{
        city:string;
        town:string;
        postalCode?:string;/* etar mane postal code thaketeo pare nao thakte pare */
    };
}={
    address:{
        city:'Dhaka',
        town:'Banani'

    },
};

const postalCode = user?.address?.postalCode/* ekhane optional chaining sign '?.' deoate undefined asleo code crash korbe na */
console.log(postalCode)