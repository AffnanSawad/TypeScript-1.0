{

    //  Constraints :  kichu value fixed kore dewa.

    //  like kono course e Enroll korte hole name , email dite hoi. so ekane name , enroll must thakte hbe. as a fixed value. and it its called CONSTRAINTS ...


    const Profile_Enroll = < T extends { name : string , email: string}>( parameter : T) => {


        const course = ' WEB DEVELOPMENT' ;

        return {
            ...parameter ,
            course
        }
    }
   
    //  1
    const result_1 = Profile_Enroll( {
        name : 'Affnan Sawad' ,
        email : ' affnansawad@gmail.com',
        is_Developer : true 
    }   )

    console.log(result_1);

    //  2
    const result_2 = Profile_Enroll( {
        name : 'Hasnat Abdullah' ,
        email : 'hasnat@gmail.com',
        is_Developer : false ,
        is_Politician : true
    }   )

    console.log(result_2);


//   Constrains with KeyOf
//  KeyOf used like as a UNION (|)

   type Vehicles = {
      
    bike :  false  ;
    cars : 'BMW'  ;
    bus :  'LAYlAND'
    
   }
   

//    keyOf 

type  Affnan  =  keyof Vehicles 

const result12 : Affnan =   "cars"


console.log(result12);
  




}