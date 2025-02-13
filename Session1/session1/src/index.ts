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



     //-------------MODULE -3 STARTED -----------------//
      
    //  Class : 

     class Personal_Info{

    
        constructor( public name : string , public age : number , public role: string)
         
        {  }

        showInformation(){

            console.log( ` My name is ${this.name} , i am ${this.age} years old and I am a ${this.role}`);
        }

     }

    //  calling
    const Result_1 = new Personal_Info( "Affnan Sawad" , 22 , "Full Stack Developer")
    const Result_2 = new Personal_Info( "Mamdud Sawad" , 18 , "Financial Analyst")

 // Calling method to display information
Result_1.showInformation();
Result_2.showInformation();



//  INHERITANCE : Ekta class er property , method onno Class e use kora.

//  Main class take bole Parent class . r baki gulake child class bole.


// Main / parent class

class Parents_Info {

 
    constructor( public name : string , public age : number) 

    {    }
     

    Void_Display( working : boolean ){

        console.log(`Parent name is ${this.name} who is ${this.age} and he is a working person which is ${working}`) ;
    }


}


class Children  extends Parents_Info{

    constructor(public name: string , public age : number)

    {
        
        super(name , age) 


    }

   
    void_children_show( grade : number ){
      
        console.log(`My  name is ${this.name} who is ${this.age} and he is in grade ${grade}`) ;

    }

}

const X = new Children("Mohi" , 45 );
X.Void_Display(true)


const Y = new Children("Srabon" , 20 );
Y.void_children_show(12)

//  Output :
// Parent name is Mohi who is 45 and he is a working person which is true
// My  name is Srabon who is 20 and he is in grade 12


//  Type Guard : 1 . TypeOf , 2 . in guard

// Type of : check kore variable type
//  in guard : check kore variable / property exists kore kina.

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
const result__12 = summ("2","3");

console.log(result1)
console.log(result__12);


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



//  Type Guard : instance of = it is used to use Class properties , method  to use in function which is outside the class.

    // Type guard using instance of

    class Animal{
   
        constructor( public name:string , public age: number , public sound:string) {}

         makeSound(){
           
            console.log(`The ${this.name} who is ${this.age} years old , says ${this.sound}`)
         
        }
   

    }


    class Dog extends Animal {
   
        constructor( public name:string , public age: number , public sound:string) {   
            // 
            
            super(name,age,sound);

             
        }

        makeBark(){
            console.log(`bark bark`)
        }

   }




   class Cat extends Animal {
   
    constructor( public name:string , public age: number , public sound:string) {   
        // 
        
        super(name,age,sound);

         
    }

    makeMeow(){
        console.log(`meow`)
    }

}



const cat1 = new Animal('Persian', 12 , 'meow');
const dog1 = new Animal('German', 12 , 'gheow');

// 
const isDog = ( animal : Animal) : animal is Dog => {

    return animal instanceof Dog ;
}

const isCat = ( animal : Animal) : animal is Cat => {

    return animal instanceof Cat ;
}

const soundHobe = ( animal : Animal ) => {

    if(isDog(animal)){

        animal.makeBark()
    }
    else if( isCat(animal)){
        animal.makeMeow()
    }
    else{
        animal.makeSound();
    }
}

//  Access modifier : private variable ke function er maddhe use kora. 

    //  Access Modifier :

    class BankAccount{

    
        constructor( public readonly id: number , private _balance: number ){}

        addBalance( amount : number ){

            this._balance = this._balance + amount ;
        }

        newBalance(){
          return  this._balance;
        }


    }

    const First_Balance = new BankAccount(221, 63000);
    
    // First_Balance.balacne
    // new balance add hocce na

    First_Balance.addBalance(3000);
    
    const my_new_total_Balance  = First_Balance.newBalance();

    console.log(my_new_total_Balance);




    //  Getter / Setter : functin call na kore Private variable e access kora.

    //   GETTER & SETTER

class BankAccount1{

    
    constructor( public readonly id: number , private _balance: number ){}

  
    set deposit1( amount : number ){

        this._balance = this._balance + amount ;
    }

    get newAmount1(){

        return this._balance ;
    }


}

const First_Balance1 = new BankAccount1(221, 63000);

//  add new amount of money . without calling function
First_Balance1.deposit1 = 2000;

const NewBalance1 = First_Balance1.newAmount1

console.log(NewBalance1);




  //  Static : memory location same thake. 

  class Count {

    static balance : number = 0 ;

    static incrimant(){
    
        return ( Count.balance = Count.balance + 1  )

    }

    static decrimant(){
    
        return ( Count.balance= Count.balance - 1  )
    }
}

// ANSWER: 1,2,3
console.log( Count.incrimant())   
console.log( Count.incrimant())
console.log( Count.incrimant())
console.log( Count.incrimant())

//   ANSWER : -1,-2,-3
console.log( Count.decrimant())   
console.log( Count.decrimant())
console.log( Count.decrimant())
console.log( Count.decrimant())



// //   POLYMORPHISM

 class Person{
  
    getSleep(){

        console.log(`I sleep For 10 hours`)
    }

 }


 class student extends Person{
   
    getSleep(){

        console.log(`I sleep For 8 hours`)
    }

 }


 class Developer1 extends Person{
   
    getSleep(){

        console.log(`I sleep For 6 hours`)
    
    }

 }


 const SleepingTime = ( params : Person)=>{
    
    console.log(params.getSleep())

 }


 const r1 = new Person()
 const r2 = new student()
 const r3 = new Developer1()

 SleepingTime(r1);
 SleepingTime(r2);
 SleepingTime(r3);

//  Anwswer :  10 , 8 , 6 hour sleep kore


//  Polymorphism : ekta form theke onekgula form . dekte same bt variable /output different .

// parent
class TotalSemester {


    getCgpa(){

        console.log( ' I obtained 3.65 cgpa')
    }
}

// childrens 
class inIIUC extends TotalSemester {

    constructor( public gpa : number) {   super()   }

    getCgpa(){
       
        
        console.log(`Got Cgpa in IIUC  ${this.gpa*2} `)

    }
}


// childrens 
class inCUNY extends TotalSemester {

    constructor( public gpa : number) {   super()   }

    getCgpa(){
       
        
        console.log(`Got Cgpa in CUNY  ${this.gpa*2} `)

    }
}


// calling function

const showCgpa = ( parameter : TotalSemester) =>{

    parameter.getCgpa();
}

const x1 = new TotalSemester();
const x2 = new inIIUC(1.65);
const x3 = new inCUNY(1.75);

showCgpa(x1)
showCgpa(x2)
showCgpa(x3)


// I obtained 3.65 cgpa
// Got Cgpa in IIUC 3.3
// Got Cgpa in CUNY 3.5



//  ENCAPSULATION : class er property , value gula jate sobai use korte na kore pare sjnno variable ke private , protected korake Encapsulation bole.  [ Similar to Access_Modifier. ]


//  Abstraction : summary code er . details hide kore just important part show korano ke Abstraction bole

//  idea
interface Vehicle {

    model() : void ;
    madeIn() : void ;
}

// idea implementing
class myCar implements Vehicle {

    model(): void {
         console.log('My car is Honda Accord 2024')
    }

    madeIn(): void {
       
        console.log('Made in 2024')
    }

}

 const newCar = new myCar();

 newCar.madeIn();
 newCar.model();


//  Another example ;

// Abstract class defining the blueprint of a shape
abstract class Shape {
    // Abstract method that must be implemented in derived classes
    abstract calculateArea(): number;
  
    // Concrete method common to all shapes
    display(): void {
      console.log("This is a shape.");
    }
  }
  
  // Derived class implementing the abstract method
  class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
      super();
    }
  
    calculateArea(): number {
      return this.width * this.height;
    }
  }
  
  // Derived class implementing the abstract method
  class Circle extends Shape {
    constructor(private radius: number) {
      super();
    }
  
    calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }


  
  
  // Creating instances and using them
  const rectangle = new Rectangle(5, 10);
  console.log("Rectangle Area:", rectangle.calculateArea()); // Outputs: 50
  rectangle.display(); // Outputs: This is a shape.
  
  const circle = new Circle(7);
  console.log("Circle Area:", circle.calculateArea()); // Outputs: approximately 153.94
  circle.display(); // Outputs: This is a shape.




//   .................. Module - 3 Ended ...................//



















}