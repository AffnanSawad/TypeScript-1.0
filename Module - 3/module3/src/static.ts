{

    //  Static : memory location same thake. 

    class Count {

        static balance : number = 0 ;
    
        static incrimant(){
        
            return ( Count.balance + 1  )

        }

        static decrimant(){
        
            return ( Count.balance - 1  )
        }
    }
    
    // ANSWER: 1,2,3
    console.log( Count.incrimant())   
    console.log( Count.incrimant())
    console.log( Count.incrimant())
    console.log( Count.incrimant())

//   ANSWER : -1,-2,-3
    console.log( Count.decrimant())   
    console.log( Count.decrimant())
    console.log( Count.decrimant())
    console.log( Count.decrimant())




















}