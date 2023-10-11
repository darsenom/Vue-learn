<template>
  <div class="navbar">
  
  

  <div class="card flex justify-content-center">
    <Sidebar v-model:visible="visible">
      <div class="card flex justify-content-center">
        <CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name"
        :optionGroupChildren="['states', 'cities']" style="min-width: 14rem" placeholder="Select a City" />
      </div>

      <div class="card flex justify-content-center">
        <InputText type="text" v-model="value" />
      </div>

      <div class="card flex justify-content-center">
        <InputSwitch v-model="checked" />
      </div>
    </Sidebar>
    <Button icon="pi pi-arrow-right" @click="visible = true"/>
  </div>

  <router-link to='/CardPage'>Каталог</router-link>
  <router-link to='/CardTable'>Table</router-link>


  <div class="rightSide">
  <button type="button" class="p-link telegram">
    <a class="pi pi-telegram" href="https://telegram.me/ВашеИмяПользователя" target="_blank"></a>
  </button>

  <button type="button" class="p-link p-ml-auto" @click="createAuto">
    <i class="pi pi-plus"></i>
  </button>

  <button type="button" class="p-link p-ml-auto" @click="googleRegister">
    <i class="pi pi-user"></i>
  </button>
</div>
</div>
  <Toast />
    <div label="Success" severity="success" @click="showSuccess"></div>


  

</template>

<script setup>


import Button from 'primevue/button'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { onMounted } from 'vue'
import { useAuto } from '@/composable/useAuto'
import { ref } from "vue";
import Sidebar from 'primevue/sidebar';
import CascadeSelect from 'primevue/cascadeselect';
import InputText from 'primevue/inputtext';
import InputSwitch from 'primevue/inputswitch';
import Toast from 'primevue/toast';




const visible = ref(false);

const { auto, createAuto } = useAuto()

onMounted(async () => {
  await createAuto()
})

// const transitionTelegram = () => {
//   const auth = getAuth()
//   const provider = new GoogleAuthProvider()

//   signInWithPopup(auth, provider)
//     .then((userCredential) => {
//       const user = userCredential.user
//       localStorage.setItem('user', JSON.stringify(user))
//     })
//     .catch((error) => {
//       const errorCode = error.code
//       const errorMessage = error.message
//       console.log(errorCode, errorMessage)
//     })
// }

const googleRegister = () => {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()

  signInWithPopup(auth, provider)
    .then((userCredential) => {
      const user = userCredential.user
      localStorage.setItem('user', JSON.stringify(user))
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    })
}



const selectedCity = ref();
const countries = ref([
    {
        name: 'Australia',
        code: 'AU',
        states: [
            {
                name: 'New South Wales',
                cities: [
                    { cname: 'Sydney', code: 'A-SY' },
                    { cname: 'Newcastle', code: 'A-NE' },
                    { cname: 'Wollongong', code: 'A-WO' }
                ]
            },
            {
                name: 'Queensland',
                cities: [
                    { cname: 'Brisbane', code: 'A-BR' },
                    { cname: 'Townsville', code: 'A-TO' }
                ]
            }
        ]
    },
    {
        name: 'Canada',
        code: 'CA',
        states: [
            {
                name: 'Quebec',
                cities: [
                    { cname: 'Montreal', code: 'C-MO' },
                    { cname: 'Quebec City', code: 'C-QU' }
                ]
            },
            {
                name: 'Ontario',
                cities: [
                    { cname: 'Ottawa', code: 'C-OT' },
                    { cname: 'Toronto', code: 'C-TO' }
                ]
            }
        ]
    },
    {
        name: 'United States',
        code: 'US',
        states: [
            {
                name: 'California',
                cities: [
                    { cname: 'Los Angeles', code: 'US-LA' },
                    { cname: 'San Diego', code: 'US-SD' },
                    { cname: 'San Francisco', code: 'US-SF' }
                ]
            },
            {
                name: 'Florida',
                cities: [
                    { cname: 'Jacksonville', code: 'US-JA' },
                    { cname: 'Miami', code: 'US-MI' },
                    { cname: 'Tampa', code: 'US-TA' },
                    { cname: 'Orlando', code: 'US-OR' }
                ]
            },
            {
                name: 'Texas',
                cities: [
                    { cname: 'Austin', code: 'US-AU' },
                    { cname: 'Dallas', code: 'US-DA' },
                    { cname: 'Houston', code: 'US-HO' }
                ]
            }
        ]
    }
]);

const value = ref(null);

const checked = ref(true);


import { useToast } from "primevue/usetoast";
const toast = useToast();

onMounted(async () => {
  await showSuccess()
})

const showSuccess = () => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
};

</script>

<style>
.navbar {
    display: flex;
    justify-content: space-between;
}

.rightSide {
    display: flex;
    justify-content: space-evenly;
    flex-basis: 10%;
}
</style>