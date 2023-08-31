<script setup>
import CarItem from '@/components/CarItem.vue';
const carsArray = [
  {
    brand: "BMW",
    price: "2000000",
    year: 1994,
    volume: 2.4,
    color: '#FF0000',
    image: "https://avatars.mds.yandex.net/i?id=7c5d6b5e6b8d062c8888b70c33656f44fc5092e4-8960812-images-thumbs&n=13"
  }
]
</script>

<template>
<section class="car" v-for="car in carsArray" :key="car">
    <CarItem :car="car" />
</section>
</template>

<style scoped>

</style>
