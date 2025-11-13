//oop - class - object

// class Animal{
//    name:string;
//    species:string;
//    sound:string

//    constructor(name:string, species:string,sound:string){
//     this.name=name
//     this.species=species
//     this.sound=sound
//    }

// //    making method
// makeSound(){
//     // console.log(`The animal is making sound`)
//     console.log(`${this.name} is making sound ${this.sound}`)
// }
// }

//parameter properties(using public keyword)--cleaning code
class Animal{
constructor(public name:string, public species:string,public sound:string){
  
   }

//    making method
makeSound(){
    // console.log(`The animal is making sound`)
    console.log(`${this.name} is making sound ${this.sound}`)
}
}

// property define
const dog = new Animal('dogesh vai','dog','ghew ghew')

const cat = new Animal('cat vai','cat','meow meow')
console.log(cat.species)
console.log(dog.species)
// function call
// cat.makeSound()
dog.makeSound()



