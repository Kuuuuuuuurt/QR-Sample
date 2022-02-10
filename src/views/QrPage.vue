<template>
   <div class="container">
    <vue-qrcode v-bind:value="qrValue"/>
    <h2 class="boreder border-red">{{qrValue}}</h2>

    wtf
  </div>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import VueQrcode from 'vue-qrcode'


export default defineComponent({

    
  name: 'HomePage',
  components: {
     VueQrcode,
  },

  data(){
    return{
      qrValue : "Kurt Vonn Alde"
    }
  },
});
</script>

<style scoped>
</style>
