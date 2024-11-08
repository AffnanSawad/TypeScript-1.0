{


//   POLYMORPHISM

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


 class Developer extends Person{
   
    getSleep(){

        console.log(`I sleep For 6 hours`)
    
    }

 }


 const SleepingTime = ( params : Person)=>{
    
    console.log(params.getSleep())

 }


 const r1 = new Person()
 const r2 = new student()
 const r3 = new Developer()

 SleepingTime(r1);
 SleepingTime(r2);
 SleepingTime(r3);

//  Anwswer :  10 , 8 , 6 hour sleep kore
















}