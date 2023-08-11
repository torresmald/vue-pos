<script setup>
import { ref } from 'vue';
import DatePicker from 'vue-tailwind-datepicker';
import {useSalesStore} from '../../stores/useSales'
import Sales from '../../components/Sales.vue'

const sales = useSalesStore();

const formatter = ref({
  date: 'DD/MM/YYYY',
  month: 'MMM'
});
</script>

<template>
  <h1 class="text-4xl font-black my-10">Ventas</h1>
  <div class="md:flex md:items-start gap-5">
    <div class="md:w-1/2 lg:w-1/3 bg-white justify-center">
      <DatePicker no-input as-single  i18n="es-es" v-model="sales.date" :formatter="formatter"/> 
    </div>

    <div class="md:w-1/2 lg:w-2/3 space-y-5 lg:h-screen lg:overflow-y-scroll p-5 pb-32">
      <p class="text-center" v-if="sales.isSelectedDate">Ventas en la Fecha: <span class="font-extrabold">{{ sales.date }}</span></p>
      <p v-else class="text-center font-bold">No hay fecha Seleccionada</p>
      <div class="">
        <Sales v-for="sale in sales.salesCollection" :sale="sale"/>
      </div>
    </div>
  </div>
</template>
