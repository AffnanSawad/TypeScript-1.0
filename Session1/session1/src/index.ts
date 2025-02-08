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

const age2 = '19'
const age22 = 19

console.log( age2 as string )
console.log( age22 as number)


//  Interface : OBJECT + OOP ER KHETRE USE HOI ... INTERFACE E MARCHING ER SUBIDHA ASE . JETA TYPE E NAI.

interface iSelf {

    name: string ;
    age : number | string ;
    skilss : string[ ] ;

}

//  marching = mane property add kortsi
interface iSelf {
    isDeveloper : boolean ;
}

//  property values :
const iinput : iSelf = {
    name :'affnan',
    age : 20 ,
    skilss: ['html','css'] ,
    isDeveloper : true 
}

// 
console.log(iinput);


//  Generic :

//  Normal :
 const arra_num : number [ ] = [1,2,3,4,5] ;
 const arra_strig : string [ ] = ['a','b','c'] ;
 const arra_boolean : boolean [ ] = [true , false] ;

//   

const arra_num1 : Array<number> = [1,2,3,4,5] ;
const arra_strig1 : Array<string> = ['a','b','c'] ;
const arra_boolean1 : Array<boolean> = [true , false] ;

//  Generics : type diye ekta structure banai parameter niye , diif jagai parameter value bosiye kora.

// T hocce parameter :

type Generic_with_array< T > = Array< T >

const arra_num11 :Generic_with_array<number>= [1,2,3,4,5] ;

const arra_strig11 :Generic_with_array<string>= ['a','b'] ;

const arra_boolean11: Generic_with_array<boolean> = [true , false] ;

console.log(arra_num11,arra_strig11,arra_boolean11) ;


//  Interface + generics 

interface iiuc< T , X , Y > {

    name : string ;
    age : T ;
    isDeveloper : X ;
    role : Y 
}

const iiuc_student : iiuc< number , boolean , string> = {

 name : 'Affnan' ,
 age : 21 ,
 isDeveloper : true ,
 role: 'Full-Stack-Developer'

}

console.log(iiuc_student);

// example : 2
const iiuc_student_2 : iiuc< number , boolean , {frontEnd:boolean , backEnd: boolean} > = {
   
    name : 'Affnan' ,
    age : 21 ,
    isDeveloper : true ,
    role: {
        frontEnd : true ,
        backEnd : true
    }

}

console.log(iiuc_student_2);


//  Generic in Function :

const addition =  <T1 , T2> ( x : T1 , y: T2) =>{

    return {  x  , y }  ;
}

const values = addition<string , number>('My Salary is :', 80000);

console.log( values)
















}