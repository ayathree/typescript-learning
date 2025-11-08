let bazarList :(string | number)[]= ['milk', 12,'sugar',3]
bazarList.push()

let poojaRollAndName:[number, string]=[12,'Pooja']
let couple:[string,string] =['Husband','Wife']
let roll:[number,number,number]=[45,56,67]
roll[1]=67 /* ekhane roll variable er type mane 1 number index er type jehetu number tai ekhane number na diye kono string dile error dekhabe */
couple[1]='son'
console.log(couple)

// optional type
let user:{
    firstName:string,
    middleName?:string, /*ekhane optional type ? diye deoate ami middleName object ta na rakhateo user variable ta te error dekhache na */
    lastName:string,
    isNMarried:boolean,
}={
    firstName:'Nobanita',
    lastName:'Ayathree',
    isNMarried:true,
}