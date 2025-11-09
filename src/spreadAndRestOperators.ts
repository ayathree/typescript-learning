// spread operators for array

const friends=['Rina','Mina','Tina']
const schoolFriends=['Gina','Lina']
friends.push(...schoolFriends) /* ekhane amra sorasori spread operators er madhome friends er modhe schoolFriends er value gula push kore dite parlam, mane amra jodi spread operators ta na ditam tahole amaderke error dekhato friends variable e, but js e eta show korato na,run kore felto, etai js and ts er modhe differance */
console.log(friends)

// spread operators for objects
const user={
    name:'pooja',
    phoneNo:'07888888'
}
const otherInfo={
    hobby:'coding',
    salary:1000000
}

const userInfo={...user,...otherInfo}
console.log(userInfo)

// rest operators(elomelo jinish potro k ek jaigai niye asha rest operator er kaj)

const invitationFriends=(...friends:string[])/*ekhane friends name er ekta varibale niye nilam ekkebare jekhane joto icha toto amra name string dukhate and rakte parbo, sob elomelo na theke eksath e hoye thakbe */=>{
    friends.forEach((friend:string)=>
    console.log(`send invitation to ${friend}`));
};

invitationFriends("pintu",'chintu','pooja','mejba')
