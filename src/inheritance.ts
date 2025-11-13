//for common creating parent class
class Parent{
    name:string;//common
    age:number;//common
    address: string;//common

    constructor(name:string,age:number,address:string){
        this.name=name;
        this.age=age;
        this.address=address
    }
//common method
    getSleep(numberOFhours:number){
        console.log(`${this.name} ${numberOFhours} ghonta ghumai`);
    }          

}












class Student extends Parent{}

const student1=new Student(`Mr.fakibaaz`,18,'Bangladesh');

student1.getSleep(15)

class Teacher extends Parent{
    
    designation:string;//extra/own property

    constructor(name:string,age:number,addess:string,designation:string){

        super(name,age,addess)
        
        this.designation=designation
    }

   
    
    //own method
    takeClass(numberOFhours:number){
        console.log(`${this.name} ${numberOFhours} eto ghonta class nei`)
    }
}

const teacher1=new Teacher('Mr.smart',25,'Bangladesh','Teacher');

teacher1.takeClass(4)