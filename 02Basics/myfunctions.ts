 //functions

 function addTwo(num: number):number {
    return num + 2
    // return "hello"
}

function getUpper(val: string) {
 return val.toLowerCase()

}

function signUpUser(name: string, email:string, isPaid: boolean){

}

let loginUser = (name:string, email: string, isPaid: boolean = false) => {

}

let myValue = addTwo(2);
getUpper("Shehzad")
signUpUser("Shehzad", "shehzuali5@gmail.com", false)
loginUser("shehzu", "shzu@ggmail.com");


const getHello = (s:string):string => {
   return " "
}

// const heros = ["2", "b", "c"];

const heros = [1,2,3];

heros.map((hero): string => {
    return `hero is ${hero}`
})


function consoleError(errmsg:string): void {
    console.log(errmsg);
}

function handleError(errmsg:string): never {
    throw new Error(errmsg);
}


export{}
