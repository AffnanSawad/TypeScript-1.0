{

//   GETTER & SETTER

class BankAccount{

    
    constructor( public readonly id: number , private _balance: number ){}

  
    set deposit( amount : number ){

        this._balance = this._balance + amount ;
    }

    get newAmount(){

        return this._balance ;
    }


}

const First_Balance = new BankAccount(221, 63000);

//  deposit
First_Balance.deposit = 2000;

const NewBalance = First_Balance.newAmount

console.log(NewBalance);









}