{

    // normal function :

     const summation = ( params : number  ) => {

        const result = params + 10 ;

        return result
     }

    const final = summation(20);
    console.log(final);

    
    
    //  Function with generics :
   
    const addition = <T> ( parameter : T) : T[] => {
         
        return  [parameter];

    }
     
    const result_1 = addition<number>(20);
    console.log(result_1);

   
    //  Tupple 
    const profile = <T,X> ( parameter1 : T , parameter2 : X) : [T,X] =>{

        return [parameter1,parameter2]

    }
       
    const r_2 = profile< string , { age : number , Developer : boolean}>('Affnan', { age:21, Developer: true});

    console.log(r_2);















}