{

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












}