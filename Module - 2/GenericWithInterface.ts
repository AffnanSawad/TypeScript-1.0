{

// Generic With Interface

interface Developer<T>{
    name:string ;
    age: number ;

    skills : T 
}   

// 

const Affnan : Developer< {role : string , salary : number}> = {

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






}