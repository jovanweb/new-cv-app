<template>
    <section class="scan">
        <div class="container">
            <article>
                <h2 class="mb-4"><strong>Scan your equipment</strong></h2>
                <qrcode-scanner
                    :qrbox="250" 
                    :fps="10" 
                />
            </article>
        </div>
    </section>
</template>
<script>
import QrcodeScanner from '../components/QrcodeScanner.vue'
export default {
    name: "ScanEquipment",
    components: {
      QrcodeScanner
    },
    data(){
        return{
    
        }
    },
    methods: {

    },
}
</script>
<style lang="scss" scoped>
    .scan {
        padding: 100px 0;
    }

    article {
        max-width: 500px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }
</style>