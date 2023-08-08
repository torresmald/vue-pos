<script setup>
import AdminNav from "../../components/AdminNav.vue";
</script>

<template>
  <AdminNav></AdminNav>
  <div class="pt-36 container mx-auto md:min-h-screen">
    <RouterView></RouterView>
  </div>
</template>
