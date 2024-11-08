{

//  Practice Module -> 3 ;

class Personal{
   
    constructor(public readonly Id : string , public name : string , public age : number , private jobPosition : string , private totalSalary : number    ) {  }

      
    mySalary( amount : number ){

        console.log( `I am ${this.name} , I am ${this.age} years old , i am doing ${this.jobPosition}`)
    }

    bonus( bonus_amount : number){

         this.totalSalary = this.totalSalary + bonus_amount;
      
    }

    showTotalSalary(){
        
        return this.totalSalary;

    }


}

const first_info = new Personal('2', 'Affnan', 12,'Full Stck Developer',8000); 

// add bonus 

first_info.bonus(2000);

const FinalSalary = first_info.showTotalSalary();


//  Static

class Addition {

    static Number : number = 0 ;

    static add(){

        return ( Addition.Number + 1)
    }
}

console.log( Addition.add() )
console.log( Addition.add() )
console.log( Addition.add() )
// 1,2,3



































}