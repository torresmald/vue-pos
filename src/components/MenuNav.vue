<script setup>
import Link from "./Link.vue";
import Logo from "./Logo.vue";

</script>

<template>
  <header
    class="px-10 py-7 bg-gray-700 flex justify-between items-center	 absolute z-10 top-0 w-full"
  >
    <Logo/>
    <nav class="">
      <Link to="admin"> Administrar </Link>
    </nav>
  </header>
</template>
