<script setup>
import Navbar from '@/components/layouts/Navbar.vue';
import Footer from '@/components/Footer.vue';
import CarList from '@/components/CarList.vue';
import router from '@/router';
import { RouterView } from 'vue-router'






</script>

<template>
    <Navbar />
    <router-view></router-view>
    <Footer />
</template>

<style scoped>


</style>
