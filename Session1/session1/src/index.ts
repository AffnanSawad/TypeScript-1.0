{

    //  Conceptual Session 1  : TypeScript

     let age : number = 21 ;


    let names : string = 'Affnan' ;

    let isDeveloper : boolean = true ;

    let income : number[ ] = [ 70000, 80000 ,90000 ];

    let skills : string[ ] = [ 'Front-End' , 'Back-End'];

    // Tupple : 
    let  salary : [ string , number ] = [ 'Full-Stack' , 85000] ;

    //  

    console.log(age,names,isDeveloper,income,skills,salary);


    //  normal object
    const firstObject : {

        name_1 : string ;
       readonly roll : number ;
        section : 'A' ;
        student : boolean ;
        salary?: undefined ;
    
    }  = {
        name_1 : 'Affnan',
        roll : 2 ,
        section : 'A',
        student: true ,
        salary: undefined 
    }
    
    console.log(firstObject);
   
    //  Object + type allias

    type mySelf1 = {
      
        name: string ;
        age : number ;
        role: string ;
        skillFull : boolean ;
        skilss?: string[];
    }


    const my_Self : mySelf1 = {


        name: 'Affnan',
        age : 21 ,
        role : 'Full-Stack Developer',
        skillFull : true ,
        skilss : ['FRONT-END', 'BACK-END']
    }

    console.log(my_Self);

    
    //  function 

    function summation( x : number , y : number) : number{
       
        const add : number = x + y ;

        return add ;

    }

    const summ1 = summation(5,5);
    console.log(summ1);

    //  Arrow Function 

    const summation_Arrow = ( a1 : number , b1 : number) : number => {

        const result : number = a1 + b1 ;

        return result ;
    }

    const summ2 = summation_Arrow(3,7);
    console.log(summ2);


    // Spread operator;

    const arr_1 : number[] = [2,3,4,5,6] ;
    const arr_2 : number [ ] = [7,8,9,10] ;

    arr_1.push( ...arr_2 ) ;

    console.log(arr_1);


    //  destructing
    const newArray : number[] = [1,2,3,4,5,6,7,8,9,10] ;

    const [ x ,y ,  , ...restNumbers] = newArray ;

    //  object destructuring ;

    const my_Self_2 : mySelf1 = {

        name: 'Affnan',
        age : 21 ,
        role : 'Full-Stack Developer',
        skillFull : true ,       
   
    }

    const final_myself_2 : mySelf1 = {

        ...my_Self_2,

        skilss : ['front end' , 'backend']
    
    }

    console.log(final_myself_2);

   
   


    //  type allias  : arrays ;

    type main_Array = number[] ;
    type stu_names = string[] ;
    type my_mainSelf = [ string , number ,boolean];

    const main : main_Array = [1,2,3];
    const student_names : stu_names = ['affnan','sawad'];
    const my_main_self : my_mainSelf = ['Developer', 21,true]

    console.log(main);
    console.log(student_names);
    console.log(my_main_self);

    //  ternary and optional chaining 

   const isAdmin = true ;

   const result_1 : string = isAdmin ? 'He is a admin' : ' Not a Admin' ;

   console.log(result_1);

 
//  object
   const address = {
      
    address1 : {
        present : 'cawkbazar',
        permanent : 'Nyc'
    }
    
  }

  const optional_chaining = address?.address1?.present ??'No address assigned'  ;

  console.log(optional_chaining);


//  nullish operator
const logIn = null ;

const Authentication = logIn ?? 'Guest User' ;

console.log(Authentication);


//  -------- MODULE 1 ENDED -----------



//  ------------ MODULE 2 STARTING -----------------



//   Assertion : type select kore dewa.

     //  Type Assertion => type select kore dewa.
    
     let age1 : any ;
    
     age1= 20 ;
     
     age1 = 'My age is 20' ;
     
     ( age1 as number  );
     
     (  age1 as string );
     
     //  Evabe select kore dewa jai....
     
     
     const KgToGm = ( a : number | string ) : number | string | undefined => {
     
      if( typeof a === 'string' ){
     
         const result : number = parseFloat(a) * 1000 ;
     
         return result ;
      
        }
      if( typeof a === 'number'){
     
         const result : number = a * 1000;
        
         return result ;
      
        }
     
     }
     
     const R1 = KgToGm('10') as string ;
     const R2 = KgToGm(10) as number ;
     
     
     
     //  try catch
     
     type CustomError = {
     
        message : string ;
     
     }
     
      try{
     
      }
     catch(error){
     
        console.log( (error as CustomError).message   )
     }
      

     
    // Interface  :

    type user1 = {

        name: String ;
        age: number ;
    
    }

    const Affnan : user1 = {
        name : 'Affnan Sawad',
        age : 20 
    }

    //  new property add korte hole

    type newUser1 = user1 & { role : string  }

    const Affnan1 : newUser1 = {
        name : 'Affnan Sawad',
        age : 20 ,
        role : 'Full Stack Developer'
    }


    //  Same kaj Interface diye korte hole

   interface user2 {

    name: string ;
    age: number;
   
    }

    const Mamdud : user2 = {
        name : 'Mamdud',
        age : 18
    }


    interface newUser2 extends user2 {
        role: 'CA'
    }

    const Mamdud2 : newUser2 = {
        name:'Mamdud',
        age : 18,
        role: 'CA'

    }


    //  ARRAY
    interface Array1 {

        [index : number] : number
   
    }

    const mySalary : Array1 = [70000,80000,90000,]


    //  Object er jnno Interface use kora valo.. Array , function er jnno Type use kora valo.

   


    // generic
    const ages : Array<number> = [1,2,3]

    // const name : string[] = ['affnan','sawad'] ;
    
    const names1 : Array<string> = ['affnan','sawad'] ;
   
    // Generic Type
    type Generic_Array< T > = Array< T > 

    const my_name : Generic_Array< string > = ['affnan','sawad']

    const my_age : Generic_Array< number > = [20,18]
   
    const is_Developer : Generic_Array< boolean > = [true,true] ;


    // Generic for objct

    const object_generic : Generic_Array< {name : string , age : number } >  = [
        
        {
      
      name :' affnan' ,
      age: 20 
       }  ,

    {
        name : 'mamdud',
        age : 20 ,
        
    }

]

// Generic Tupple

type Generic_Array1< T , X > = [T,X]

const serial_maintain : Generic_Array1< string , number > = ['affnan' , 19] ;


const result2 : Generic_Array1< number , { name : string , age : number} >  =  [ 

 20 ,

 {
    name: 'Affnan Sawad',
    age: 22
 }


]  



// 


interface Developer<T>{
    name:string ;
    age: number ;

    skills : T 
}   

// 

const Affnan2 : Developer< {role : string , salary : number}> = {

    name : 'Affnan',
    age : 25 ,

    skills : {

        role: 'Full Stack',
        salary : 80000 
    
    }
}


const Mamdud_Sawad : Developer< {
    
    role : string , 
    salary : number ,
    isAdmin : boolean

}
     
     > = {

    name : 'Mamdud',
    age : 25 ,

    skills : {

        role: 'CA',
        salary : 90000 ,
        isAdmin : true 
    
    }
}


//  
 // normal function :

 const summation1 = ( params : number  ) => {

    const result = params + 10 ;

    return result
 }

const final = summation1(20);
console.log(final);



//  Function with generics :

const addition = <T> ( parameter : T) : T[] => {
     
    return  [parameter];

}
 
const result_11 = addition<number>(20);
console.log(result_11);


//  Tupple 
const profile = <T,X> ( parameter1 : T , parameter2 : X) : [T,X] =>{

    return [parameter1,parameter2]

}
   
const r_2 = profile< string , { age : number , Developer : boolean}>('Affnan', { age:21, Developer: true});

console.log(r_2);



// 
 //  Constraints :  kichu value fixed kore dewa.

    //  like kono course e Enroll korte hole name , email dite hoi. so ekane name , enroll must thakte hbe. as a fixed value. and it its called CONSTRAINTS ...


    const Profile_Enroll = < T extends { name : string , email: string}>( parameter : T) => {


        const course = ' WEB DEVELOPMENT' ;

        return {
            ...parameter ,
            course
        }
    }
   
    //  1
    const result_12 = Profile_Enroll( {
        name : 'Affnan Sawad' ,
        email : ' affnansawad@gmail.com',
        is_Developer : true 
    }   )

    console.log(result_12);

    //  2
    const result_2 = Profile_Enroll( {
        name : 'Hasnat Abdullah' ,
        email : 'hasnat@gmail.com',
        is_Developer : false ,
        is_Politician : true
    }   )

    console.log(result_2);


//   Constrains with KeyOf
//  KeyOf used like as a UNION (|)

   type Vehicles = {
      
    bike :  false  ;
    cars : 'BMW'  ;
    bus :  'LAYlAND'
    
   }
   

//    keyOf 

type  Affnan  =  keyof Vehicles 

const result12 : Affnan =   "cars"


console.log(result12);
  

// ASYNCHRONOUS 

const todo = async () =>{

    const res = await fetch('data.json')

    const data = res.json ;

    return data ;
}



// Asyncronous 

const createPromise = () : Promise<string> =>{

 
   return new Promise<string>(  (resolve , reject) =>{

   const data : string = 'Data is comimg'

   if(data){
    resolve(data)
   } else{
    reject(data);
   }

   }  )

}

// calling
const callingFunction =  async()   =>{

    const data : string = await createPromise();

    console.log(data);
}

callingFunction();


//  Conditional Types

type a = undefined ;
type b = string ;

//  conditions ;

type x = a extends undefined ? undefined  : null ;

type y = a extends string ? true  : b extends string ? true : false ;


 
   // normal mapping
   const array12 : number[] = [1,2,3,4,5];

   const mappingArray = array12.map( (item)=> item.toString()  )
   console.log(mappingArray);

//  Mapped Types :

type Array_Mapped = {
   height : string ;
   width: string ;
}


type mapping_Array = {

   [ item in keyof Array_Mapped  ] : number ;

}



//  UTILITY TYPES : PICK , OMIT , REQUIRE , READONLY etc

type information = {

    name : string ;
    age : number ;
    email? : string ;
    number : string ;

}

// pick : jkno propeyty pick kora
 
type info1 = Pick< information , "name" | "age" | "email"    >

// omit : bad dewa

type info2 = Omit < information ,  "email" | "number" >

//  require : require evrything

type info3 = Required< information>


//  Read Only : cant change the value of the properties

type info4 = Readonly< information >









        //  ----------- END OF MODULE - 2 ---------------- //





}