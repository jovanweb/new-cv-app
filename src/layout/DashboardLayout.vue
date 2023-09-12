<template>
    <div class="main-wrapper">
        <Header></Header>
        <AsideNav></AsideNav>
        <main>

            <slot></slot>
        </main>
    </div>
</template>
<script>
    import Header from "../components/Header.vue"
    import AsideNav from "../components/AsideNav.vue"

    export default {
        components: {
            Header, AsideNav
        }
    }
</script>
<style lang="scss" scoped>
    .main-wrapper {
        padding-left: 250px;
        position: relative;
    }

    main {
        overflow: auto;
        padding-top: 60px;
    }

</style>