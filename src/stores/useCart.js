import { defineStore } from 'pinia'
import { ref, computed } from 'vue';
import { useCouponStore } from './useCoupon';
import { collection, addDoc, runTransaction, doc } from 'firebase/firestore'
import { useFirestore } from 'vuefire'
import { getCurrentDate } from '../helpers';

export const useCartStore = defineStore('cart', () => {


    const db = useFirestore();



    const coupon = useCouponStore()
    const products = ref([]);
    const IVA = 21;

    const addItem = (product) => {
        const existProduct = products.value.find((item) => item.name === product.name)
        if (!existProduct) {
            products.value.push({ ...product, quantity: 1, id: product.id });
        }

    }
    const isEmpty = computed(() => {
        return products.value.length === 0
    })

    const subtotalPrice = () => {
        const subtotal = products.value.map((product) => product.quantity * product.price).reduce((total, acc) => total + acc, 0)
        return subtotal
    }
    const impuestos = () => {
        const impuesto = (subtotalPrice() * IVA) / 100;
        return impuesto
    }
    const totalPay = () => {
        const totalPay = impuestos() + subtotalPrice() - coupon.discount
        return totalPay
    }

    const deleteItem = (product) => {
        products.value = products.value.filter((item) => item.name != product.name)
    }


    const checkout = async () => {
        try {
            await addDoc(collection(db, 'sales'), {
                products: products.value.map((product) => {
                    const { available, ...data } = product
                    return data
                }),
                discount: coupon.discount,
                taxes: impuestos(),
                subtotal: subtotalPrice(),
                total: totalPay(),
                date: getCurrentDate(),
            })


            // Quitar cantidad disponible en BBDD:

            products.value.forEach(async (product) => {
                const productRef = doc(db, 'products', product.id)
                await runTransaction(db, async (transaction) => {
                    const currentProduct = await transaction.get(productRef);
                    const updateAvailable = currentProduct.data().available - product.quantity
                    transaction.update(productRef, { available: updateAvailable })
                })
            })

            alert('Comprado con Éxito')
            setTimeout(() => {
                products.value = []
                coupon.discount = 0;
                coupon.coupon = ''
            }, 1000);

        } catch (error) {
            console.log(error);
        }
    }

    return {
        addItem,
        products,
        isEmpty,
        subtotalPrice,
        impuestos,
        totalPay,
        deleteItem,
        checkout
    }
})