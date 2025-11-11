// constraint : strict rules deya

type Student = {id:number; name:string; dateOfBirth:string; class:string}

const addStudentToCourse = <T extends Student>(studentInfo:T)=>{
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

const student3={
    id:444,
    name:'pooja',
    dateOfBirth:'2/3/200',
    class:'3',
    hasWatch:true
}

const result = addStudentToCourse(student3);
console.log(result);
