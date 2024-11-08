{


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











}