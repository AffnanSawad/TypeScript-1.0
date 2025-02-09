{

   
     // const age : number[] = [1,2,3] ;
   
    // generic
    const ages : Array<number> = [1,2,3]

    // const name : string[] = ['affnan','sawad'] ;
    
    const names : Array<string> = ['affnan','sawad'] ;
   
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





}