{
//   Type Guard 

type dataType = string | number ;


const summ = ( a1 : dataType , a2 : dataType) : dataType =>{

 if( typeof a1 ==='number' && typeof a2==='number' ){

    return a1 + a2 ;
 }
 else{
    return a1.toString() + a2.toString();
 }


}

const result1 = summ(2,3);
const result12 = summ("2","3");

console.log(result1)
console.log(result12);


//  in guard 

type Normaluser = {
  
    name: string;

}
type Adminuser = {
  
    name: string;

    role: 'Admin' ;

}


const loggedInUser = ( user : Normaluser | Adminuser) =>{
 
    if('role' in user){

        console.log(` Log in user ${user.name} who is ${user.role}  `)
    }

    else{
        console.log(` Log in user ${user.name}   `)
    }


}


// calling
const firstUser : Normaluser = {

 name: 'Asad',

}

const SecondUser : Adminuser = {
    
    name: 'Affnan',
    role: 'Admin'

}

// 
const result = loggedInUser(firstUser); 
const result22 = loggedInUser(SecondUser); 
















}