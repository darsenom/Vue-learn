<script setup>
import CarItem from '@/components/CarItem.vue';
import { defineProps } from 'vue';
import { useRouter } from 'vue-router'

const cars = [
    {
        brand: "BMW",
        price: "20000000",
        year: 2010,
        volume: 3.0,
        color: '#FCE205',
        criticalNumber: 1,
        image: "https://www.pngmart.com/files/3/BMW-M3-PNG-Image.png"
    },
    {
        brand: "Mercedes-Benz",
        price: "22000000",
        year: 2013,
        volume: 3.5,
        color: '#696969',
        criticalNumber: 2,
        image: "https://www.freepnglogos.com/uploads/mercedes-png/mercedes-amg-car-png-image-pngpix-9.png"
    },
    {
        brand: "Lexus",
        price: "25000000",
        year: 2020,
        volume: 4.0,
        color: '#FF8C00',
        criticalNumber: 3,
        image: "https://www.pngmart.com/files/9/Lexus-PNG-Free-Download.png"
    },
]

const router = useRouter()

function goToCarUrl(id) {
  router.push({ name: 'car', params: { id } })
}
</script>

<template>
    <section class="flexTemplate">
        <section class="cars" v-for="auto in cars" :key="auto">
            <CarItem :car="auto" @click="$router.push(`/cardpage/${auto.id}`)" />
            <!-- <CarItem :car="item" @click="goToCarUrl(car.id)"/> -->
            <!-- <CarItem :car="item" @click.stop="goToCarUrl(auto.id)" :price="auto.price" /> -->
        </section>
    </section>
</template>

<style scoped>
.flexTemplate {
    display: flex;
    margin-top: 20px;
}
</style>