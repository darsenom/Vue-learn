<script setup>
import CarItem from '@/components/CarItem.vue';
import { defineProps } from 'vue';

defineProps  ({
    cars: {
        type: Array,
        required: true,
    },
})
</script>

<template>
    <section class="flexTemplate">
        <section class="cars" v-for="item in cars" :key="item">
            <CarItem :car="item" />
        </section>
    </section>
</template>

<style scoped>
.flexTemplate {
    display: flex;
    margin-top: 20px;
}
</style>