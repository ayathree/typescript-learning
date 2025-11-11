const arrayofNum: number[] =[1,4,6];
const arrayofSring:string[]=['1','4','6'];
const arrayofStringUsingMap:string[]= arrayofNum.map((num)=>num.toString());

console.log(arrayofStringUsingMap);

type AreaofNum ={
    height: number;
    width: number;
};

// type height = AreaofNum['height']

// type AreaofString={
//     height:string;
//     width:string;
// };
  
1. //[key in 'height' | 'width'] diye bujache je key gulo mane height and width

// type AreaofString={
//     [key in 'height' | 'width']:string;
// };

2.//[key in keyof AreaofNum] diye bujache je keyof mane  AreaofNum er key gulo , ekprokar dynamic kore

// type AreaofString={
//     [key in keyof AreaofNum]:string;
// };

3.//pro dianamic with generic,AreaofNum ke dianamic generic T diye bujano jate onno type gulor jonno o kaj kore

// type Area<T>={
//     [key in keyof T]:string;
// };

4.// ekhane string er jaigai T[key] use kora hoyeche karon T hoche jekono type like 'AreaofNum', and [key] mane hoche sei typer er key gulor(like height,width jai thakuk) tader type gulo(like string,boolean etc), so eta korar mane holo etake reusable kora and sokol type er khetre use korar jonno karon onek key of any type er type jekono ta hote pare

type Area<T>={
    [key in keyof T]:T[key];
};

const area1:Area<{height:string;width:string}>={
    height :'gh',
    width:'fr'
}

