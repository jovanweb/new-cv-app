<template>
    <div id="qr-code-full-region" class="scan-box mb-5"></div>
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
            html5QrcodeScanner:  null,
            working: false,
            items: []
        }
    },
    methods: {
        initScanner() {
            this.html5QrcodeScanner.render((decodedText, decodedResult) => {
                if( ! this.working  && ! this.items.includes(decodedText)) {               
                    this.working = true
                    this.items = [
                        ...this.items,
                        decodedText
                    ]
                    console.log(this.items)
                    setTimeout(() => {
                        this.working = false    
                    }, 1000)
                } 
            });
        },
    },
	mounted() {

        var config = { fps: this.fps ? this.fps : 10 };
            if (this.qrbox) {
                config['qrbox'] = this.qrbox;
            }


        this.html5QrcodeScanner = new Html5QrcodeScanner("qr-code-full-region", config);

        this.initScanner()
	}
}
</script>
<style lang="scss" scoped>
    .scan-box {
        border: 2px solid #bababa!important;
        border-radius: 10px;
        aspect-ratio: 1 / 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px!important;
    }

    
</style>

<style lang="scss">
    .html5-qrcode-element {
        background-color: #fff;
        border: 1px solid #bababa;
        border-radius: 4px;
        height: 40px;
        padding: 0 15px;
        transition: all .3s ease;

        &:hover {
            background-color: #f1f1f1;
        }
    }

    #qr-code-full-region__scan_region {
        border-radius: 10px;
        overflow: hidden;
    }

    #qr-code-full-region__dashboard_section_csr {
        display: flex!important;
        flex-direction: column;
        gap: 10px;

        >span {
            margin-right: 0!important;
            flex: 1;

            button {
                width: 100%;
            }
        }
    }

    #html5-qrcode-anchor-scan-type-change {
        width: 100%;
        background-color: #0d6efd;
        border-color: #0d6efd;
        color: #ffffff;
        margin-top: 10px;
        text-decoration: none!important;
        padding: 5px 15px;

        &:hover {
            background-color: #0b5ed7;
            border-color: #0b5ed7;
        }
    }
</style>