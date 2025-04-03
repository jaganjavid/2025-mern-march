

// For Loop

// Loop can execute a block of code number of times

// declare, condition, inc

// for(let i = 0; i <= 10; i++){


//     if(i === 4){
//         console.log(`${4} is fav number`);
//         continue;
//     }

//     if(i === 7){
//         console.log(`${7} hit stop the loop`);
//         break;
//     }


//     console.log(i);
// }

const users = ["Jagan", "Javid", "Akash", "Arun"];

console.log(users);
// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);

// console.log(users.length);

// for(let i = 0; i < users.length; i++){
//     console.log(users[i]);
// }

// console.log(users);

users.forEach(function(user, index, arr){
    console.log(`${user} - ${index}`)
    // console.log(arr);
})