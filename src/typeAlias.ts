// typeAlias use in function

type AddFunc=(num1:number, num2:number)=>number;/* AddFunc ta diye ami type gula assign kore fellam */
const add:AddFunc=(num1,num2)=>num1+num2 /* tai ekhane r extra kore type assign kore dite hoini cause AddFunc ekhane assign kore deoa hoyeche */

// typealias er kaj holo alada kore typealias assign kore dile r porer bar type declare krte hoi na, eta reusable, so code clean thake