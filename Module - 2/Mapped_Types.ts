{
 
    // normal mapping
    const array12 : number[] = [1,2,3,4,5];

    const mappingArray = array12.map( (item)=> item.toString()  )
    console.log(mappingArray);

//  Mapped Types :

type Array_Mapped = {
    height : string ;
    width: string ;
}


type mapping_Array = {

    [ item in keyof Array_Mapped  ] : number ;

}














}