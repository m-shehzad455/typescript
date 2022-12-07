// const User = {
//     name: "Shehzad",
//     email: "shehzuali5@gmail.com",
//     isActive: true,
// }


// function createUser({name:string, isPaid:boolean}) {}

// let newUser = {name: "shehzu", isPaid: false, email: "shehzuali5@gmail.com"}


// createUser(newUser);


// function createCourse():{name:string, price:number} {
//     return{name: "shehzu", price: 399};
// }

type User = {
    name: string;
    email:string;
    isActive:boolean;
}

function createUser(user:User): User{
  return {name:"", email:"", isActive:true}
}

createUser({name:"", email:"", isActive:true})



export {};