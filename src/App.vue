<script setup>
import Navbar from '@/components/layouts/Navbar.vue';
import CarList from '@/components/CarList.vue';
// import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import CarTable from '@/components/CarTable.vue';
import router from '@/router';



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


</script>

<template>
    <router-view></router-view>
    <Navbar />
    <CarList :cars="cars"/>
    <CarTable :cars="cars"/>
    <Footer />
</template>

<style scoped>


</style>
