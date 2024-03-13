// Hello Admin: Make a array of five or more usernames, including the name 'admin'.
let userName :string[] =['admin','imran','nawaz','zardari','bilawal'];

//  Imagine you are writing code that will print a greeting to each user after they log in to a website.
for (let i=0; i<userName.length; i++){
    if(userName[i] === 'admin'){
        console.log('Hello admin, would you like to see a status report?');
    }else{
        console.log(`Hello ${userName[i]}, Thankyou for logging in again.`);
    }
}

//  Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin,
//  would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.



