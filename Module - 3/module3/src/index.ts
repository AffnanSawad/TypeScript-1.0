{
  
    //  Object Oriented TypeScript 

    //  CLASS create kore function call kora.

    class Animal{
   
        constructor( public name:string , public age: number , public sound:string) {   
        // 
         }

         makeSound(){
            console.log(`The ${this.name} who is ${this.age} years old , says ${this.sound}`)
         }
   

    }

    const dog = new Animal( 'German Shepherd' , 7 , 'Gheu Gheu') ;

    const cat = new Animal ('persian',2,'meow meow');
    
    // Calling Function ;
    dog.makeSound();
    cat.makeSound();












}