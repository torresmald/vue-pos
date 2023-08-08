<script setup>
import Link from "./Link.vue";
import Logo from "./Logo.vue";
</script>

<template>
  <header
    class="px-10 py-7 bg-gray-700 flex justify-between items-center	absolute z-10 top-0 w-full"
  >
    <Logo />
    <nav class="flex gap-4">
      <RouterLink :to="{name: 'productos'}" class="rounded text-white p-2 font-bold ">Productos</RouterLink>
      <RouterLink :to="{name: 'ventas'}" class="rounded text-white p-2 font-bold ">Ventas</RouterLink>

      <Link to="shop"> Ir a Tienda </Link>
    </nav>
  </header>
</template>
