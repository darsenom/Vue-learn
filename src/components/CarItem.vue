<script setup>
import { defineProps, computed } from 'vue';
import Chip from 'primevue/chip'; 

const props = defineProps({
    car: {
        type: Object,
        required: true,
    },
});

const carRemake = computed( () => { 
  return ({ 
    ...props.car, 
    price: props.car.price + '$' 
  }) 
})

function changeColor(color) {
    const crappyColos = ['#FF0000', '#00FF00', '#0000FF']
    if (crappyColos.includes(color)) {
        return true
    }
    return false
}

</script>

<template>
  <Card>
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
      <Chip v-if="Number(carRemake.price.slice(0, -1)) > 3000000" label="Дорогой" icon="pi pi-apple"/>
      <Chip icon="pi pi-history" label="Старый" v-else-if="Number(carRemake.year) <= 1960"></Chip>
      <Chip icon="pi pi-briefcase" label="Скучный" v-else></Chip>
      <Chip icon="pi pi-eye-slash" label="Конченный цвет" v-if="changeColor(carRemake.color)"/>
    </template>
  </Card>
</template>

<style scoped>
.car {
  display: flex;
}

.details {
  display: flex;
    border-bottom: 1px solid rgb(221, 221, 221);
    padding: 14px;
}

.details div {
    flex-basis: 50%;
}

.photo-car {
    flex-basis: 27%;
}
.details-car {
    flex-basis: 20%;
    color: rgb(113, 109, 110);
}
.chipes{ 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  flex-direction: column; 
} 
.chipes span{ 
  margin: 5px; 
  padding: 5px; 
  border: 1px solid black; 
  border-radius:  5px; 
   
}
</style>