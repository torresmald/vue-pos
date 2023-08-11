import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useFirestore, useCollection } from 'vuefire'
import { collection, query, where } from 'firebase/firestore'

export const useSalesStore = defineStore('sales', () => {

    const date = ref('');
    const db = useFirestore()

    const isSelectedDate = computed(() => {
        return date.value
    })

    const salesSource = computed(() => {
        if (date.value) {
            const q = query(
                collection(db, 'sales'),
                where('date', '==', date.value)
            )
            return q
        }
    })

    const salesCollection = useCollection(salesSource)

    return {
        date,
        isSelectedDate,
        salesCollection
    }
})