{
  
    //  inheritance : ekta common class. jkaner property , method ke proyojon onusare onno class e use kora jai. jate code choto r simple hoi.

//  parent class for common blocks
    class Mother{
       
        constructor(public name:string, public age:number) {}

        totalSleep( sleepHours : number ){
      
            console.log(`The ${this.name} who is ${this.age} years old sleep ${sleepHours} hours`)

        
        }

    }


    //  inherit kore parent class theke property ni asbo;

    class son extends Mother{

   
        constructor(public name:string, public age:number) {
           
            super(name,age)

        }

        marks( obtaineMarks:number){

            console.log(`The ${this.name} got ${obtaineMarks} marks`)
        }


    }

    const elderSon = new son('Samin',22);


    // another class inherit kortesi
    class youngson extends Mother{

   
        constructor(public name:string, public age:number) {
           
            super(name,age)

        }

        marks( obtaineMarks:number){

            console.log(`The ${this.name} got ${obtaineMarks} marks`)
        }


    }

    const youngerSon = new youngson('Mamdud',18);
    











}