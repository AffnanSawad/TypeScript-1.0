{

    //  Type Assertion => type select kore dewa.
    
    let age : any ;
    
    age = 20 ;
    
    age = 'My age is 20' ;
    
    ( age as number  );
    
    (  age as string );
    
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
    
    
    
    
    
    
    
    
    }