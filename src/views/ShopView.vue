<script setup>
import {storeToRefs} from 'pinia'
import MenuNav from "../components/MenuNav.vue";
import { useProductsStore } from "../stores/useProducts";
import ProductCard from '../components/ProductCard.vue'
const products = useProductsStore();
const { filteredProducts } = storeToRefs(products);
</script>

<template>
  <MenuNav></MenuNav>
  <main class="pt-10 lg:flex lg:h-screen lg:overflow-hidden">
    <div class="lg:w-2/3 lg:screen lg:overflow-y-scroll py-24 px-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
            <ProductCard v-for="product in filteredProducts" :product="product" />
        </div>
    </div>
    <aside class="lg:w-1/3 lg:screen lg:overflow-y-scroll pt-10 pb-32 px-10">

    </aside>
  </main>
</template>
