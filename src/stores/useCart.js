import { defineStore } from 'pinia'
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {

    const products = ref([]);
    const IVA = 21;

    const addItem = (product) => {
        const existProduct = products.value.find((item)  => item.name === product.name)
        if(!existProduct){
            products.value.push({ ...product, quantity: 1 });
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
        const totalPay = impuestos() + subtotalPrice()
        return totalPay
    }

    const deleteItem = (product) => {
        products.value = products.value.filter((item) => item.name != product.name)
    }

    return {
        addItem,
        products,
        isEmpty,
        subtotalPrice,
        impuestos,
        totalPay,
        deleteItem
    }
})