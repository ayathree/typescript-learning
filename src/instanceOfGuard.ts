// oop : instance of type guard/ type narrowing

class Person {
    name:string;

    constructor(name:string){
        this.name=name;
    }

    getSleep(numsOfHours:number){
        console.log(`${this.name} doinik ${numsOfHours} ghonta ghumai`)
    }
}

class Student extends Person{
    constructor(name:string){
        super(name);
    }

    doStudy(numsOfHours:number){
        console.log(`${this.name} doinik ${numsOfHours} ghonta study kore`)
    }
}

class Teacher extends Person{
    constructor(name:string){
        super(name)
    }
    takeClass(numsOfHours:number){
        console.log(`${this.name} doinik ${numsOfHours} ghonta class nei`)
    }
}

//function guard

const isStudent=(user:Person)=>{
     return user instanceof Student; //true false,user is Student
}

const getUserInfo=(user:Person)=>{
    //using function guard
    if(isStudent(user)){
        user.doStudy(10)
        //jehetu person tha common shudhu name suggest kore hover krle tai ekhane teacher er method anar jonno instanceof Teacher use kora holo
    }else if(user instanceof Teacher){
        user.takeClass(5)
    }else{
        user.getSleep(15)
    }

}
//instance neoa ekahne student1,teacher1,person1 egula instance
const student1 =new Student('Mr.student')
const teacher1=new Teacher('Mr.teacher')
const person1 = new Person('Mr.person')

getUserInfo(student1)
getUserInfo(teacher1)
getUserInfo(person1)