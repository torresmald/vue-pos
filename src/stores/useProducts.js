import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useFirestore, useCollection, useFirebaseStorage } from 'vuefire'
import { collection, addDoc, updateDoc, deleteDoc, doc, getDoc } from 'firebase/firestore'
import {ref as storageRef, deleteObject} from 'firebase/storage'

export const useProductsStore = defineStore('products', () => {

    const db = useFirestore();
    const storage = useFirebaseStorage();

    const productsCollection = useCollection(collection(db, 'products'));

    const selectedCategory = ref(1);

    const categories = [
        { id: 1, name: 'Sudaderas' },
        { id: 2, name: 'Zapatillas' },
        { id: 3, name: 'Gafas' }

    ]

    const categoryOptions = computed(() => {
        const options = [
            { value: '', label: '--Seleccione--', attrs: { disabled: true } },
            ...categories.map(category => ({ label: category.name, value: category.id }))
        ]
        return options
    })

    const filteredProducts = computed(() => {
        return productsCollection.value.filter(product => product.category === selectedCategory.value)
    })

    const createProduct = async (product) => {
        await addDoc(collection(db, 'products'), product)
    }

    const updateProduct = async (docRef, product) => {
        const { image, url, ...values } = product
        if (image.length) {
            await updateDoc(docRef, {
                ...values,
                image: url.value
            })
        } else {
            await updateDoc(docRef, values)
        }
    }
    
    const deleteProduct = async id => {
        try {
            if(confirm('Deseas Eliminar?')){
                const docRef = doc(db, 'products', id);
                const docSnap = await getDoc(docRef);
                const {image} = docSnap.data();
                const imageRef = storageRef(storage, image);
                await deleteDoc(docRef);
                await deleteObject(imageRef);
            }
           
        } catch (error) {
            console.log(error);
        }
    }

    return {
        createProduct,
        categoryOptions,
        productsCollection,
        updateProduct,
        categories,
        selectedCategory,
        deleteProduct,
        filteredProducts
    }
})