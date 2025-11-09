// object destructuring

const user ={
    name:{
        middleName:'Pooja',
        lastName:'Ayathree'
    },
    gender:'female',
    favouriteColor:'black',
}

const {favouriteColor } = user
console.log(favouriteColor)

const {favouriteColor : myFavoriteColor }/*  'myFavoriteColor' eivabe kono object er name deoatake bole 'name alias', amra evabe new name dite pari kono object ke, abar ekhane amra 'favouriteColor' object ke string bole declare krte parbo na, jokhon amra destructur krbo kono object ke tokon type declare kore deoa jai na */ = user

const {name:{middleName}}=user/* evabe amra destructure korbo jokhon ekta object er modhe arekta value thake */

const {name:{middleName:myMiddleName}}/* new name deoa holo 'middleName' ke */=user
console.log(myFavoriteColor)
console.log(middleName)
console.log(myMiddleName)



// array destructuring
const friends=['rahim','karim','bulbul']
const bestFriend=friends[1]/* the normal way to findout bestfriends by index number */
console.log(bestFriend)
const[A,myBestFriend,C]=friends;/* second prosess to get the exact value of index 1 */
console.log(myBestFriend)
// skipping process
const[T]=friends
const[,Y]=friends
const[,,S]=friends
console.log(T)
console.log(Y)
console.log(S)
