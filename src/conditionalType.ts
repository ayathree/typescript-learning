//conditional type: je type condition er upor depended

type A = null;
type B = undefined;

type  C = A extends number ? true : B extends undefined ? true : false;

type  RichPeopleVehicla ={
    bike: string;
    car: string;
    ship: string;
};

type CheckVehicle<T>=T extends keyof RichPeopleVehicla? true:false

type HasBike=CheckVehicle<'car'>/* ekhane hasbike er upor hover korle true asbe karon keyof 'RichPeopleVehicla' mane key gulo bike,car,ship and 'CheckVehicle' check krche string naki mane key gulor type er sathe millo naki, so ship and string hoate 'Hasbike' er upor hover korle true asbe*/