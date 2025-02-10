{

//  Conditional Types

 type a = undefined ;
 type b = string ;

//  conditions ;

type x = a extends undefined ? undefined  : null ;

type y = a extends string ? true  : b extends string ? true : false ;

















}