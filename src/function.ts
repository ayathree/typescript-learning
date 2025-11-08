// normal function
function addNormal(num1:number,num2:number):number{
    return num1+num2
}
console.log(addNormal(3,4))

// arrow function
const addArrow=(num1:number,num2:number):number=>num1+num2;
console.log(addArrow(2,2)) 

// method define

const userPooja={
    name:'pooja',
    balance:100000,
    addBalance(value:number):number{
        const totalBalance= this.balance + value;
        return totalBalance

    },
    
}

console.log(userPooja.addBalance(300000))

const arr :number[]=[1,2,3]
const sqrArr= arr.map((element:number):number=>element*element)
console.log(sqrArr)