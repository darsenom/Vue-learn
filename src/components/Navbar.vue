<script setup>
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';

</script>
<template>
    <Menubar :model="items">
        <template #start>
            <img alt="logo" src="https://www.nicepng.com/png/full/920-9203332_car-logo-png-hot-wheels-car-svg.png"
                height="50" class="mr-2" />
        </template>
        <template #end>
            <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText  v-model="value3" type="text" size="large" placeholder="Search" />
            </span>
            
        </template>

    </Menubar>
</template>
<script setup></script>