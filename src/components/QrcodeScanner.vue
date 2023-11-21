<template>
    <div id="qr-code-full-region"></div>
    <button @click="initScanner">Scan Again</button>
    {{}}
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
    methods: {
        initScanner() {
            var config = { fps: this.fps ? this.fps : 10 };
            if (this.qrbox) {
                config['qrbox'] = this.qrbox;
            }

            function onScanSuccess(decodedText, decodedResult) {
                console.log("nesto",decodedResult);
                // this.$emit('result', qrCodeMessage)
                console.log(`Scan result: ${decodedText}`, decodedResult);
                html5QrcodeScanner.clear();
            }
            
            var html5QrcodeScanner = new Html5QrcodeScanner(
                "qr-code-full-region", config);
            html5QrcodeScanner.render(onScanSuccess);
        }
    },
	mounted() {
        this.initScanner()
	}
}
</script>
<style lang="">
    
</style>