
import {db } from '../../main'

  


const insertDB = async ()  => {

   const docRef = db.collection('products').doc('products');

    await docRef.set({
      
    });
    console.log ('entrei')
}


export {
          insertDB,
          
         
  
          
          
      }

