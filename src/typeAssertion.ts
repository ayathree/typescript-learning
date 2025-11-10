let anything:any;
anything ='pooja';

const kgToGMConverter = (input: string | number):string|number|undefined /* ekhane explicitly amra bole dilam je type gula string,number,undefined hobe */=>{
    if(typeof input ==="number"){
        return input*1000
    }
    else if(typeof input ==='string'){
        const[value]=input.split(" ");
        return `Converted output is:${Number(value)*1000}`
    }
}

const result1 = kgToGMConverter(2) as number /* upore explicitly bole deoar jonno ekhane 'result1' er upor hober korle amr kache suggestion dito je result er type te hoi string,number, na hoi undefined jekono ekta hobe, tai abar 'kgToGMConverter(2)' er por 'as number' write krte hobe type ta confidently bujanor jonno */
console.log({result1})
const result2 = kgToGMConverter('2 kg') as string
console.log({result2})
