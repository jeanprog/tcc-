
import { db } from '../../config/firebase'


const createProduct = (products) => {
    return db.collection('products').add(products)
} 

const getProducts = async () => {
    return await db.collection('products').get()
}

const setProducts = async () => {
    return await db.collection('products').doc(this.id).set()
}

export {
    createProduct,
    getProducts,
    setProducts
}