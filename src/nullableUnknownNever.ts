// nullable type
const getUser =(input:string | null)=>{
    if(input){
        console.log(`From DB: ${input}`);
    }
    else{
        console.log(`From DB: ALL USER`);
    }
};
getUser(null)/* From DB: ALL USER print hobe null deoate */
getUser('pooja')/* From DB:pooja print hobe string deoate */

// unknown type
const discountCalculator = (input:unknown)=>{
    if(typeof input ==='number'){
        const discoutedPrice = input*0.1;
        console.log(discoutedPrice);
    }
    else if(typeof input==='string'){
        const [discoutedPrice] = input.split(" ")
        console.log(Number(discoutedPrice)*0.1);
    }
    else{
        console.log('wrong input')
    }
}
// jokhon different type er input thakte pare and result o different type er input theke ber krte hoi tokhon type hishebe unknown use kora hoi
discountCalculator(100);
discountCalculator('100 tk');
discountCalculator(null)


// void type(never)
const throwError = (msg:string):never=>{
    throw new Error(msg)
    
}

throwError('Error')
// ei code ta kokhono run krbe na, konodin return krbe na, tai etar type never

