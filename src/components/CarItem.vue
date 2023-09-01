<script setup>
import { defineProps, computed } from 'vue';

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
<div class="car">
    <div class="photo-car"><img :src="carRemake.image" alt="car"></div>
    
    <div class="details-car">
        <div class="details">
            <div>Модель:</div>
            <div>{{ carRemake.brand }}</div>
        </div>
        <div class="details">
            <div>Цена:</div>
            <div>{{ carRemake.price }}</div>
        </div>
        <div class="details">
            <div>Год выпуска:</div>
            <div>{{ carRemake.year }}</div>
        </div>
        <div class="details">
            <div>Объем двигателя:</div>
            <div>{{ carRemake.volume }}</div>
        </div>
        <div class="details">
            <div>Цвет:</div>
            <div :style="{ backgroundColor: carRemake.color }"></div>
        </div>
        <!-- <div class="details">
            <div>КПД:</div>
            <div :style="{ backgroundColor: carRemake.color }"></div>
        </div> -->
        <div class="chipes">
        <span v-if="Number(carRemake.price.slice(0, -1)) > 100">Дорогой автомобиль</span>
        <span v-else-if="Number(carRemake.year) < 2000">Старый</span>
        <span v-else>Скучный</span>
        <span v-if="changeColor(carRemake.color)">Так себе цвет</span>
        </div>
    </div>
</div>
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