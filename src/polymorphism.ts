//polymorphism = method same, class different

class Person{
    getSleep(){
        console.log(`I am a normal person,I sleep for 8 hours`);
    }
}

class Student extends Person{
    getSleep() {
        console.log(`I am a student ,I sleep for 7 hours`)

    }
}

class NextLevelDev extends Person{
    getSleep(){
      console.log(`I am a developer, I sleep for 6 hour`)  
    }
}

const getSleepingHours = (param:Person)=>{
    param.getSleep()
}


//instance
const person1 = new Person()
const person2 = new Student()
const person3 = new NextLevelDev()

getSleepingHours(person2)



// second example

class Shape{
    getArea(): number{
        return 0;
    }
}

class Circle extends Shape{
    //area= pie*r*r
    radius:number;
    constructor(radius:number){
        super()
        this.radius=radius
    }

    getArea(): number {
        return Math.PI*this.radius*this.radius
    }

}

class Rectangle extends Shape{
    //area = height*width

    height:number;
    width:number;

    constructor(height:number, width:number){
        super();
        this.height=height;
        this.width=width
    }

    getArea(): number {
        return this.height*this.width
        
    }
}

const getArea=(param:Shape)=>{
    console.log(param.getArea())
};

//instance
const shape1 =new Shape()
const shape2 = new Circle(10)
const shape3 = new Rectangle(10,20)

getArea(shape3)
