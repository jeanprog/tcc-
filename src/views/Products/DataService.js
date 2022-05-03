

import { db } from '../../config/firebase'


const createProduct = (products) => {
    return db.collection('products').add(products)
} 

const getProducts = async () => {
    return await db.collection('products').get()
}




export {
    createProduct,
    getProducts
    
}





//const insertDB = async () => {
    /* const docRef = db.collection('products').doc('products')

    await docRef.set({})
    console.log('entrei') */
//}

//export default insertDB
