<template>
    <header class="header-main">
        header
    </header>
</template>
<script>
export default {
    name:"Header"
}
</script>
<style lang="scss" scoped>
    .header-main {
        height: 60px;
        background-color: #222;
        position: fixed;
        top: 0;
        width: calc(100% - 250px);
        left: 250px;
        z-index: 10;
    }  
</style>