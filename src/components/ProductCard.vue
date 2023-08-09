<script setup>
import { formatCurrency } from "../helpers";
defineProps({
  product: {
    type: Object,
  },
});
</script>

<template>
  <div class="rounder bg-white shadow relative">
    <img :src="product.image" :alt="product.name" />
    <div class="p-3 space-y-2">
      <h3 class="text-xl font-black text-gray-500">{{ product.name }}</h3>
      <p class="text-gray-500">Disponibles: {{ product.available }}</p>
      <p class="text-2xl text-gray-900 font-extrabold">
        Precio: {{ formatCurrency(product.price) }}
      </p>
    </div>
    <button type="button" class="absolute bottom-5 right-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
    </button>
  </div>
</template>
