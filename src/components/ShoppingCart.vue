<script setup>
import ShoppingCartItem from "./ShoppingCartItem.vue";
import CouponForm from "./CouponForm.vue";
import { useCartStore } from "../stores/useCart";
import { useCouponStore } from "../stores/useCoupon";
import Amount from "./Amount.vue";
import { formatCurrency } from "../helpers";
const cart = useCartStore();
const coupon = useCouponStore()
</script>

<template>
  <p v-if="cart.isEmpty" class="py-36 font-bold text-xl text-center">
    No hay Productos en el Carrito
  </p>
  <div v-else class="py-36">
    <p class="text-4xl font-bold text-gray-900">Resumen</p>
    <ul role="list" class="mt-6 divide-y divide-gray-200">
      <ShoppingCartItem v-for="product in cart.products" :product="product" />
      
    </ul>
    <dl class="space-y-6 border-t border-gray-200 text-sm ">
        <Amount>
            <template #label>
                Subtotal: 
            </template>
            {{ formatCurrency(cart.subtotalPrice()) }}
        </Amount>
        <Amount>
            <template #label>
                Impuestos: 
            </template>
            {{ formatCurrency(cart.impuestos()) }}
        </Amount>
        <Amount v-if="coupon.discount">
            <template #label>
                Descuentos: 
            </template>
            {{ formatCurrency(coupon.discount) }}
        </Amount>
        <Amount>
            <template #label>
                Total: 
            </template>
            {{ formatCurrency(cart.totalPay()) }}
        </Amount>
    </dl>
    <CouponForm />
    <button type="button" class="w-full text-white bg-green-500 hover:bg-green-700 rounded-md mt-8 p-3 uppercase text-xl" @click="cart.checkout">
      Comprar Ahora
      </button>
  </div>
</template>
