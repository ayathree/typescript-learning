// keyof : type operator

type RichPeoplesVehicle={
    car:string; //key:value 
    bike:string;
    cng:string;
};

type MyVehicle='bike'| 'car'|'cng';
type MyVehicle2= keyof RichPeoplesVehicle;// ekhane bujano holo je eta 'RichPeoplesVehicle' type er object gulor type er same

const myVehicle: MyVehicle2='cng'// eta nibe cause 'MyVehicle2' er modhe ache 'RichPeoplesVehicle' er type and 'RichPeoplesVehicle' er object er typer modhe cng ache

const myVehicle1:MyVehicle2='ship'//eta error cause ship nei


//keyof with constraint

type User ={
    id:number;
    name:string;
    address:{
        city:string;
    }
}

const user:User ={
    id:222,
    name:'pooja',
    address:{
        city:'ctg',
    },
};

// const myId = user['id'];
// const myName= user['name'];
// const address=user['address']

// console.log({myId,myName,address})

const getPropertyFromObj = <x>(obj:x,key:keyof x)=>{
    return obj[key]
}

const result1 = getPropertyFromObj(user,"id")
console.log(result1)

const product={
    brand:'HP'
}

const result2 = getPropertyFromObj(product,'brand')

const student={
    id:123,
    class:'four',
}

const result3 = getPropertyFromObj(student,'class')






