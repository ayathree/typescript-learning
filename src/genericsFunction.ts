// const createArrayWithString = (value: string)=>[value];

// const createArrayWithNumber = (value:number)=> [value];

// const createArrayWithBoolean = (value:boolean)=>[value];

// const createArrayWithObject = (value:{id:number; name:string})=>{
//     return [value];
// };

// const arrString = createArrayWithString('Apple');
// const arrNum = createArrayWithNumber(222);
// const arrObj = createArrayWithObject({
//     id:123,
//     name:'Next Level'
// })


// generic function create
const createArrayWithGeneric=<T>(value:T)=>{
    return [value]
}

const arrString = createArrayWithGeneric('Apple');
const arrNum = createArrayWithGeneric(222);
const arrObj = createArrayWithGeneric({
    id:123,
    name:'Next Level'
})

// tuple

const createArrayWithTuple=(param1:{id:string,name:string}, param2:number)=>[
    param1,
    param2
]

const createArrayWithTupleWithGeneric=<x,y>(param1:x,param2:y)=>[param1,param2]

const rest1 = createArrayWithTupleWithGeneric("Mezba",false);
const rest2 = createArrayWithTupleWithGeneric(222,{name:'Mezba'})


const addStudentToCourse = <T>(studentInfo:T)=>{
    return{
        course:'next level',
        ...studentInfo
    }
} ;

const student1={
    id:123,
    name:'Pooja',
    hasPen:true,
};

const student2={
    id:321,
    name:'Riya',
    hasCar:true,
    isMarried:true,
}

const result = addStudentToCourse(student2);
console.log(result);
