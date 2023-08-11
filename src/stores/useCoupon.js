import { defineStore } from "pinia";
import { ref, watch, computed } from "vue";
import { useCartStore } from "./useCart";

export const useCouponStore = defineStore('coupon', () => {

    const cart = useCartStore()

    const COUPONS = [
        {
            name: '10DESC',
            discount: 0.1
        },
        {
            name: '20DESC',
            discount: 0.2
        },
        {
            name: '50DESC',
            discount: 0.5
        }
    ];
    const coupon = ref('');
    const couponMessage = ref('');
    const discountPercentage = ref(0)
    const discount = ref(0)

   watch(discountPercentage, () => {
     discount.value = (cart.totalPay() * discountPercentage.value).toFixed(2)
   })


    const applyCoupon = () => {
        if (COUPONS.find((item) => item.name === coupon.value)) {
            couponMessage.value = 'Cupón Aplicado'
            discountPercentage.value = COUPONS.find((item) => item.name === coupon.value).discount

        } else {
            couponMessage.value = 'Cupón No Valido'
        }

        setTimeout(() => {
            couponMessage.value = ''
        }, 3000);
    }

    const isValidCoupon = computed(() => {
        return discount.value > 0
    })

    return {
        coupon,
        applyCoupon,
        couponMessage,
        discount,
        isValidCoupon
    }

})