<script setup>
import { useCouponStore } from '../stores/useCoupon';
const coupons = useCouponStore();
</script>

<template>
    <p class="mt-5 py-5 font-bold border-t border-gray-200">
        ¿Tienes un Cupón?
    </p>
    <div class="flex gap-2">
        <input type="text" class="w-full bg-white rounded-md p-2" placeholder="Ingresa el Cupón" v-model="coupons.coupon">
        <button type="button" class="bg-green-500 p-2 rounded-md font-bold uppercase disabled:opacity-30" @click="coupons.applyCoupon()" :disabled="coupons.isValidCoupon">Aplicar</button>
    </div>
    <p v-if="coupons.couponMessage" class="text-center font-bold mt-2 uppercase">{{ coupons.couponMessage }}</p>
</template>

