

import { db } from '../../config/firebase'

class DataService {
    createProduct(Products) {
        this.Products = Products
        return db.collection('products').add(this.Products)
    } 

    methods() {
    
    this.listarProdutos = [];
        db.collection('products').get().then (snapshot => {
            snapshot.forEach(doc => {
                let objectProduct = {};
                objectProduct = doc.data ();
                objectProduct.id = doc.id;
                this.listarProdutos.push(objectProduct);
                console.log(objectProduct);
                
            })
        }).catch (error => {
            console.log(error);
        })
      return this.listarProdutos;
    }
}
console.log ('entrei')

export default new DataService()






//const insertDB = async () => {
    /* const docRef = db.collection('products').doc('products')

    await docRef.set({})
    console.log('entrei') */
//}

//export default insertDB
