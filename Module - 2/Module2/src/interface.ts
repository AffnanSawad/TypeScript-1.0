{

    // Interface 

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

   













}