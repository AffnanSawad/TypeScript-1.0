{

    //  Access Modifier :

    class BankAccount{

    
        constructor( public readonly id: number , private _balance: number ){}

        addBalance( amount : number ){

            this._balance = this._balance + amount ;
        }

        newBalance(){
          return  this._balance;
        }


    }

    const First_Balance = new BankAccount(221, 63000);
    
    // First_Balance.balacne
    // new balance add hocce na

    First_Balance.addBalance(3000);
    
    const my_new_total_Balance  = First_Balance.newBalance();

    console.log(my_new_total_Balance);



















}