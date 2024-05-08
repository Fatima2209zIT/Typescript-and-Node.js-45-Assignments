let current_users :string[]= ['Celia' , 'Daniyal' , 'Hania' , 'Hareem' , 'Hareem'];
let new_users: string[]= ['Meer' , 'Celia' , 'David' , 'Kinza' , 'Hareem'];
new_users.forEach(newUsername =>{
    let lowercase: string = newUsername.toLowerCase();
    if(current_users.map(c_user => c_user.toLowerCase()).includes(lowercase)){
        console.log(`The user ${newUsername} is not available. Please write a diffrent username.`);
    }
    else{
        console.log(`The username ${newUsername} is available.`);
    }
})