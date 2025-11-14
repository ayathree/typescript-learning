class BankAccount{
    
    public readonly userId:number;
    public userName: string;
    
    private _userBalance:number;
   

    constructor(userId:number, userName:string,userBalance:number){
        this.userId=userId;
        this.userName=userName;
        this._userBalance=userBalance;
       
    }
   
    //balance ke set kora hoche
    // addBalance(balance:number){
        
    //     this.userBalance= this.userBalance + balance
    // }

    //using setter
    set addBalance(amount:number){
        this._userBalance = this._userBalance + amount;
    }
    //balance get kora
    // getBalance(){
    //     return this.userBalance
    // }

    //using getter
    get getBalance(){
        return this._userBalance;
    }
}



const poojaAccount = new BankAccount(111,'Pooja',100000000,);

// poojaAccount.addBalance(100);// function ke call korte hoche
// poojaAccount.addBalance(40);
// console.log('main balance', poojaAccount.getBalance())// function call korte hoche

poojaAccount.addBalance = 100;
//for set
console.log(poojaAccount)
//for get
console.log(poojaAccount.getBalance)

