<template>
    <div class="row">
        <div class="col-lg-6">
            <qrcode-scanner
                :qrbox="250" 
                :fps="10" 
            />
        </div>
        <div class="col-lg-6">
            <vue-qrcode :value="qrValue" :color="qrColor" :type="'image/png'" :scale="qrScale"/>
        </div>
    </div>
</template>
<script>
import QrcodeScanner from '../components/QrcodeScanner.vue'
import { debounce } from "../utility"
import VueQrcode from 'vue-qrcode'
export default {
    name: "Test",
    components: {
      QrcodeScanner, VueQrcode
    },
    data(){
        return{
            zoki: null,
            qrValue: "1",
            qrColor:{
                dark:"#000",
                light:"#fff"
            },
            qrScale: 15,
        }
    },
    methods: {

    },
}
</script>
<style lang="">
    
</style>