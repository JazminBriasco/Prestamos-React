import React from 'react'


// function Header(props){
//     console.log(props);
    
//     return(
//         <Fragment>
//         <h1>{props.titulo}</h1>
//             <p>{props.titulo}</p>
//             <h2>{props.titulo}</h2>
//     </Fragment>
//     )        
// }
// function Header({titulo}){

    
//     return(
//         <Fragment>
//             <h1>{titulo}</h1>     
//         </Fragment>
//     )         
// }

//Asi no usamos el return:
//Pero no podemos usar js.
//Usarlo cuando no hay js
const Header = ({titulo, cantidad}) => (

      
            <h1>{titulo}</h1>     
 
    );

 
export default Header;

