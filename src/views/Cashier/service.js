
import { db } from '../../config/firebase'


const createSales = (sales) => {
    return db.collection('sales').add(sales)
} 

const getSales = async () => {
    return await db.collection('sales').get()
}

export {
    createSales,
    getSales
}