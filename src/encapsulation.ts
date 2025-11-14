class BankAccount{
   
    public readonly userId:number;
    public userName: string;
    private userBalance:number;

    constructor(userId:number, userName:string,userBalance:number){
        this.userId=userId;
        this.userName=userName;
        this.userBalance=userBalance;
    }
   
    private addBalance(balance:number){
        this.userBalance= this.userBalance + balance
    }
    //encapsulated er rulls je jehetu addBalace fucntion tao private etake sorasori instance e call kora jabe na tai arecta child method calllHiddenMethod create kore sekhane addBalance use kore than callHiddenMethod ke instance e call kora hoyeche
    callHiddenMethod(balance:number){
        this.addBalance(balance)
    }
}



const poojaAccount = new BankAccount(111,'Pooja',100000000);

poojaAccount.callHiddenMethod(100);
poojaAccount.callHiddenMethod(150);

console.log(poojaAccount)