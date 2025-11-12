type Product ={
    id:number;
    name:string;
    price:string;
    stock:number;
    color?:string;
};

type ProductSummury=Pick<Product,'id'|'name'|'price'>;
// ekhane pic utility use kora hoyeche, pick utility ta hoche ekta type e ami onno ekta type theke ki ki key rakbo(string akare thakbe), jemon ekhane 'ProductSummury' type er modhe 'Pick' use kore ami first e <Product type raklm, mane ekn er modho theke ki ki key rakbo 'ProductSummury' te ta ''|'' evabe rakte hobe, ekn jodi 'ProductSummury' er upor hover kori tahole id,name,price dekbo ja eseche 'Product' type theke>

//omit= oposite of pick, means je string gulo lagbe na ta select kore dei

type ProductWontNeed=Omit<Product,'id'|'name'|'price'>;

//require
type ProductWithColor = Required<Product>
const product : ProductWithColor={
    id:222,
    name:'Mouse',
    price:'20',
    stock:100,
    color:"black",
}// ekhane ami jodi kono ekta key na ditam from 'Product' then const product e error dekhato, Required type use kore bujano hoi sokol key use korte hobe


//partial
type OptionProduct = Partial<Product>;
// partial use korate sobgula key optional hoye geche 

//Readonly
type ReadonlyProduct = Readonly<Product>;
// sobgula key readonly hoye jabe

//Record
const emptyObj:Record<string,unknown>={};

const product1={
    id:222,
    name:'Mouse',
    price:"20",
}

