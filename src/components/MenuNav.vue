<script setup>
import Link from "./Link.vue";
import Logo from "./Logo.vue";
import { useProductsStore } from "../stores/useProducts";
const products = useProductsStore();
</script>

<template>
  <header
    class="px-10 py-7 bg-gray-700 flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between items-center absolute z-10 top-0 w-full"
  >
    <div>
      <Logo />
      <div class="flex gap-5 text-white">
        <h2 class="text-lg font-extrabold">Filtros:</h2>
        <div
          class="flex items-center gap-2"
          v-for="category in products.categories"
        >
          <input type="radio"
            name="category"
            :value="category.id"
            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            :checked="products.selectedCategory === category.id"
            @change="products.selectedCategory = +$event.target.value"
          >
          <label for="" class="text-gray-100">{{ category.name }}</label>

        </div>
      </div>
    </div>

    <nav>
      <Link to="ventas"> Administrar </Link>
    </nav>
  </header>
</template>
