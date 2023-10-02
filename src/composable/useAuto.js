import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from '@/firebases'
import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
import { ref } from 'vue'
import {createId,formatDate} from '@/services/methods'
import * as firebase from 'firebase/storage'


export const useAuto = () => {
  const auto = ref(null)
  const autoList = ref([])
  const newAuto = ref({
    id:createId(),
    brand: '',
    price: '',
    year: '',
    volume: '',
    color: '',
    city: '',
    carcase: '',
    gear: '',
    travel: 0,
    image: null,
    saled: false,
  })

  const loading = ref({
    auto: false,
    autoList: false,
    newAuto: false,
  })

  

  async function createAuto() {
    loading.value.newAuto = true

    newAuto.value = {
      name: 'Toyota',
      model: 'Corolla',
    }

    try {
      await addDoc(collection(db, 'autos'), newAuto.value).then(() => {
        console.log('Cars added')
      })
    } catch (e) {
      console.error('Error: ', e)
    }
  }

  return {
    createAuto,
  }

  async function getAutoList() {
    loading.value.autoList = true
    try {
      const querySnapshot = await getDocs(collection(db, 'autos'))
      querySnapshot.forEach((doc) => {
        autoList.value.push(doc.data())
      })
    } catch (e) {
      console.error('Error: ', e)
    } finally {
      loading.value.autoList = false
    }
  }






  async function getAuto(id){
    loading.value.auto=true
    try{
      const querySnapshot=await getDocs(collection(db,'autos'))
      querySnapshot.forEach((doc)=>{
        if(doc.data().id===id){
          auto.value=doc.data()
        }
      })
    }
    catch(e){
      console.log('Error',e)
    }
    finally{
      loading.value.auto=false
    }
  }
  
  
  async function uploadImage(file) {
    console.log(file)
    const storage = getStorage()
    console.log(storage)
    const storageRef = firebase.ref(storage, 'autos/' + file.name)
    console.log(storageRef)
  
    uploadBytes(storageRef, file)
      .then(() => {
        console.log('Файл успешно загружен!')
  
      firebase
        .getDownloadURL(storageRef)
          .then((downloadURL) => {
            newAuto.value.image = downloadURL
          })
          .catch((error) => {
            console.error('Ошибка получения ссылки на загруженный файл:', error)
          })
      })
      .catch((error) => {
        console.error('Ошибка загрузки файла:', error)
      })
  }
  
  function clear() {
    newAuto.value = {
      id:'',
      brand: '',
      price: '',
      year: '',
      volume: '',
      color: '',
      city: '',
      carcase: '',
      gear: '',
      travel: 0,
      image: null,
      saled: false,
    }
    autoList.value = []
    auto.value = null
  }
  
  
  return {
    createAuto,
    getAutoList,
    auto,
    getAuto,
    autoListRemake,
    loading,
    newAuto,
    clear,
    uploadImage
  }
}







