

import { db } from '../../../config/firebase'


const createSales = (vendas) => {
    return db.collection('Sales').add(vendas)
} 

const getSales = async () => {
    return await db.collection('Sales').get()
}



export  {
    createSales,
    getSales,
    getProducts1
}