<template>
    <DataTable :value="cars">
        <Column v-for="column in carColumns" :key="column.field" :field="column.field" :header="column.header">
            <template #body="{ data }">
                <template v-if="column.field === 'criticScore'">
                    <Dropdown :modelValue="data.criticalNumber" :options="numberMarks" optionLabel="mark" optionValue="mark"
                        class="dropdown" @change="setCriticScore(data.criticalNumber, $event)" />
                </template>
                <template v-else>{{ data[column.field] }} </template>
            </template>
        </Column>
    </DataTable>
</template>
  
<script setup>
import { defineProps, ref, computed, watch } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dropdown from 'primevue/dropdown'

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

const props = defineProps({
    cars: {
        type: Array,
        required: true,
    },
})


function setCriticScore(criticalNumber, event) {
    criticalNumber = event.value
    console.log(criticalNumber)
}

watch(cars, () => {
    console.log(cars)
})

const carColumns = [
  { field: 'brand', header: 'Бренд' },
  { field: 'price', header: 'Цена' },
  { field: 'year', header: 'Год производства' },
  { field: 'age', header: 'Возвраст' },
  { field: 'volume', header: 'Объем' },
  { field: 'color', header: 'Цвет' },
  { field: 'saled', header: 'Продано' },
  { field: 'city', header: 'Город' },
  { field: 'carcase', header: 'Кузов' },
  { field: 'gear', header: 'Коробка' },
  { field: 'travel', header: 'Пробег' },
]
const numberMarks = [
    {
        mark: 0,
        header: 'Это Део Нексия',
    },
    {
        mark: 1,
        header: 'Очень плохо',
    },
    {
        mark: 2,
        header: 'Плохо',
    },
    {
        mark: 3,
        header: 'Нормально',
    },
    {
        mark: 4,
        header: 'Хорошо',
    },
    {
        mark: 5,
        header: 'Отлично',
    },
    {
        mark: 6,
        header: 'Это Бентли',
    },
]
</script>
  
<style scoped>
.dropdown {
    width: 100%;
}
</style>