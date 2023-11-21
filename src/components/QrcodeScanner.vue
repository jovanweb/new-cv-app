<template>
    <div id="qr-code-full-region" class="scan-box mb-5">
    </div>
    <button class="btn btn-primary w-25" v-if="button" @click="initScanner">Scan Again</button>
</template>
<script>

import { Html5QrcodeScanner } from "html5-qrcode";

export default {
    name: "QrcodeScanner",
    props: {
		qrbox: Number,
		fps: Number,
	},
    emits: ["result"],
    data() {
        return {
            button: false,
            html5QrcodeScanner:  null
        }
    },
    methods: {
        initScanner() {
            this.button = false;


            var config = { fps: this.fps ? this.fps : 10 };
            if (this.qrbox) {
                config['qrbox'] = this.qrbox;
            }

            
            this.html5QrcodeScanner = new Html5QrcodeScanner(
                "qr-code-full-region", config);
            this.html5QrcodeScanner.render((decodedText, decodedResult) => {
                this.html5QrcodeScanner.clear()
                this.button = true
            });

        },
        showButton() {
            console.log("show button")
            this.button = true
        },
    },
	mounted() {
        this.initScanner()
        this.button = false;
	}
}
</script>
<style lang="scss" scoped>
    .scan-box {
        border: 2px solid #bababa!important;
        border-radius: 10px;
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>