<script setup>
const props = defineProps({
    car: {
        type: Object,
        required: true,
    },
});
</script>

<template>
<div class="car">
    <div class="photo-car"><img :src="car.image" alt="car" /></div>
    <div class="details-car">
        <div class="details">
            <div>Модель:</div>
            <div>{{ car.brand }}</div>
        </div>
        <div class="details">
            <div>Цена:</div>
            <div>{{ car.price }}</div>
        </div>
        <div class="details">
            <div>Год выпуска:</div>
            <div>{{ car.year }}</div>
        </div>
        <div class="details">
            <div>Объем двигателя:</div>
            <div>{{ car.volume }}</div>
        </div>
        <div class="details">
            <div>Цвет:</div>
            <div :style="{ backgroundColor: car.color }"></div>
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
</style>
