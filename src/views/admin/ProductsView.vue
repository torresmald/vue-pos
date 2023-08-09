<script setup>
import Link from "../../components/Link.vue";
import { useProductsStore } from "../../stores/useProducts";
import Producto from '../../components/Product.vue';
const products = useProductsStore();
</script>

<template>
  <div class="flex justify-center gap-10">
    <Link to="agregar-producto">Agregar Producto</Link>
    <Link to="seed-productos"> Carga Masiva </Link>
  </div>

  <h1 class="text-4xl font-black my-10">Productos</h1>
  <ul role="list" class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
    <Producto v-for="product in products.productsCollection" :product="product"/>
  </ul>
</template>
