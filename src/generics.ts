type GenericArray<T>=Array<T>;

// const friends :string[]=['Mr.x','Mr.y'];
const friends :GenericArray<string>=['Mr.x','Mr.y'];
// const rollNumbers:number[]=[4,5,6];
const rollNumbers:GenericArray<number>=[4,5,6];
// const isEligible:boolean[]=[true,false]
const isEligible:GenericArray<boolean>=[true,false]


// generics in tople

// type Coordinates =[number,number];
type Coordinates<x,y> =[x,y];
// const coordinates:Coordinates=[20,20]
const coordinates:Coordinates<number,number>=[20,20]
const coordinates1:Coordinates<string,string>=['20','20']


// generics in object

const userList:GenericArray<{name:string;age:number}/* so for this here we can not use another category data along with name and age */>=[
    {
        name:'mr.x',
        age:22
    },
    {
        name:'mr.y',
        age:25
    },
]