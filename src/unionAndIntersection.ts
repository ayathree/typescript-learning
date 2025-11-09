//  '|'= union(or, ekta na hole arekta)

type UserRole ='admin'|'user';
const getDashBoard=(role:UserRole)=>{
    if(role === "admin"){
        return "Admin Dashboard"
    }
    else if(role === "user"){
        return "User Dashboard"
    }
    else{
        return "Guest Dashboard"
    }
};


console.log(getDashBoard('admin'))
console.log(getDashBoard('user'))
console.log(getDashBoard('guest'))/* ekhane 'guest ta type er modhe assign kora nei dekhe error dekhache' */



// '&'= intersection(and, sobgula)

type Employee ={
    id:string,
    name:string,
    phoneNo:string
}
type Manager ={
    designation: string,
    teamSize:number
}

type EmployeeManager = Employee & Manager

const pooja: EmployeeManager={
    id:'123',
    name:'Pooja',
    phoneNo:'12345',
    /* & use hoate ekhane employee and manager 2 tar e object gula use krte hoyeche, noile error dekhabe */
    designation:'manager',
    teamSize:20

}

console.log(pooja)