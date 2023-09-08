<script setup>
import { defineProps, computed } from 'vue';
import Card from 'primevue/card';
import Chip from 'primevue/chip';


const props = defineProps({
  car: {
    type: Object,
    required: true,
  },
})
const carRemake = computed(() => {
  return {
    ...props.car,
    price: props.car.price + '$',
    kpd: props.car.year / props.car.volume,

  }
})

function changeColor(color) {
  const crappyColors = ['#FF0000', '#00FF00', '#0000FF'];
  if (crappyColors.includes(color)) {
    return true
  }
  return false
} 
</script>
<template>
<!-- <<<<<<< HEAD -->
  <Card style="width: 30em; " class="card">
    <template #header>
      <img :src="carRemake.image" alt="car" class="car-image" />
    </template>
    <template #title> {{ carRemake.brand }} </template>
    <template #content>
      <p>Цена: {{ carRemake.price }}</p>
      <p>Год выпуска: {{ carRemake.year }}</p>
      <p>Объем двигателя: {{ carRemake.volume }}</p>
      <p :style="`color: ${carRemake.color}`">Цвет: {{ carRemake.color }}</p>
    </template>
    <template #footer>

      <Chip v-if="Number(carRemake.price.slice(0, -1)) > 1000000" label="Дорогой" icon="pi pi-apple" />
      <Chip v-else-if="Number(carRemake.year) <= 1960" label="Старый" icon="pi pi-history" />
      <Chip v-else label="Скучный" icon="pi-briefcase" />
      <Chip v-if="changeColor(carRemake.color)" label="Конченный цвет" icon="pi pi-eye-slash" />

    </template>
  </Card>
</template>

<style scoped>
.card {
  margin: 10px;
  border: 1px solid #dee2e6;
  border-radius: 3px;
}

.car-image {
  width: 250px;
  height: 150px;
}
</style>
