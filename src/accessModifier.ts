class BankAccount{
    // userId er age readonly utility use kora hoyeche jate kokhonoi userid amra change na kori mane tar value ta cause ekjon person er bank account er id change hoi na tai etate access kore modify kore fela holo readonly utility diye
    readonly userId:number;
    userName: string;
    //userBalance ke private kora hoyeche karon userBalance barte pare jekono somoi and etake function er madhome barate hobe, ekn ekhane private use korate eta publicly kothao use hobe na only class BankAccount er vitore jekono jaigai call kora jabe , and ei class er under ei function ta create kore bank balance increase create kora hobe
    private userBalance:number;
    //protected use kora hoyeche karon dhore nei ei userHistory ekta private things and eta class BankAccount chara onno kothao call hobe na, but in future jodi ami kono child class create kori like StudentBankAccount which's parent class is BankAccount and i need to access any private property, then ami protected use korbo rather than private modifier for access this in another class
    protected userHistory:string;

    constructor(userId:number, userName:string,userBalance:number,userHistory:string){
        this.userId=userId;
        this.userName=userName;
        this.userBalance=userBalance;
        this.userHistory=userHistory
    }
    //function for bank balance increasing
    addBalance(balance:number){
        // private property userBalace take access korlam
        this.userBalance= this.userBalance + balance
    }
}

class StudentBankAccount extends BankAccount{
    test(){
        //protected modifier hoate ekhane access kora geche,private hole kora jeto na
        this.userHistory

    }

}

const poojaAccount = new BankAccount(111,'Pooja',100000000,'regular deposite');

poojaAccount.addBalance(100);
poojaAccount.addBalance(150);

console.log(poojaAccount)