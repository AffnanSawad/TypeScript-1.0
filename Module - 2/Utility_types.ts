{

//  UTILITY TYPES : PICK , OMIT , REQUIRE , READONLY etc

type information = {

    name : string ;
    age : number ;
    email? : string ;
    number : string ;

}

// pick : jkno propeyty pick kora
 
type info1 = Pick< information , "name" | "age" | "email"    >

// omit : bad dewa

type info2 = Omit < information ,  "email" | "number" >

//  require : require evrything

type info3 = Required< information>


//  Read Only : cant change the value of the properties

type info4 = Readonly< information >













}