<script setup>
import { formatCurrency } from '../helpers';
import Amount from './Amount.vue';
const props = defineProps({
  sale: {
    type: Object,
  },
});

const products = props.sale.products;
</script>

<template>
  <div class="border-t border-gray-200 space-y-6 py-6">
    <h2 class="text-2xl font-black">Detalles Venta:</h2>
    <p class="text-xl font-black text-gray-500">Productos Vendidos</p>
    <ul role="list" class="mt-6 divide-y divide-gray-500 text-sm font-medium border-gray-200 text-gray-500">
        <li class="flex space-x-6 py-6" v-for="sale in products">
            <img :src="sale.image" :alt="sale.name" class="h-24 w-24 flex-none rounded-lg">
            <div class="flex-auto space-y-2">
                <h3 class="text-gray-900">{{ sale.name }}</h3>
                <p class="">Precio: <span class="font-extrabold text-gray-700"> {{ formatCurrency( sale.price) }}</span></p>
                <p>Cantidad: <span class="font-extrabold text-gray-700"> {{ sale.quantity }}</span></p>
            </div>
        </li>
    </ul>
    <dl class="space-y-6 border-t border-gray-200 text-sm ">
        <Amount>
            <template #label>
                Subtotal: 
            </template>
            {{ formatCurrency(props.sale.subtotal) }}
        </Amount>
        <Amount>
            <template #label>
                Impuestos: 
            </template>
            {{ formatCurrency(props.sale.taxes) }}
        </Amount>
        <Amount>
            <template #label>
                Total Pagado: 
            </template>
            {{ formatCurrency(props.sale.total) }}
        </Amount>
    </dl>
  </div>
</template>
