type User ={
    name:string;
    age:number;
};

type Roll={
    roll:'admin'|'user'
}/* new type create */

type UserWithRoll= User & Roll/* combinationation type create with user and roll */

// interface create
interface Iuser{
    name:string;
    age:number;
 }/* interface just used in object types like array,function and object */


interface IUserWithRole extends Iuser{
    role:'admin'| 'user';
} 
// combination interface create

const user1:UserWithRoll={
    name:"Mr.X",
    age:100,
    roll:'user'
}/* here i have to put roll field also because i have use UserWithRoll type where User's and Roll's fields are combined */

const user3:IUserWithRole={
    name:"Mr.X",
    age:100,
    role:'user'
}/* like user1 i have to put role field also because i have use IUserWithRole  interface where IUser's and IUserWithRole's fields are combined */

const user2:Iuser={
    name:"Mr.Y",
    age:34,
}
/*here i can also use IUser like User cause there types and fields are same */

// use interface in function
type Add =(num1:number, num2:number)=>number;

const add:Add=(num1,num2)=>num1+num2
interface IAdd{
    (num1:number,num2:number):number

}
const add1:IAdd=(num1,num2)=>num1+num2



type Friends = string[];
const friends: Friends=['A','B','C'];
interface IFriends{
    [index:number]:string
}/* it means in this interface creation first you have to assign index as a number'[index:number]' than you have to clearified that in those index there have strings like A,B,C  by ':string' */


const friends1: IFriends=['A','B','C'];


//for array and function type alias use is easier and for object you can use type alias or interface alias