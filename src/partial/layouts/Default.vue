<template>
    <header>
        <NavBar></NavBar>
    </header>

    <main>
        <router-view></router-view>
    </main>

    <footer>
        <FooterVue></FooterVue>
    </footer>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FooterVue from '../components/Footer.vue'
import Blank from './Blank.vue';

export default {
    components: {
        NavBar,
        FooterVue,
        Blank,
    }
}
</script>

<style scoped lang="scss">
.h-screen {
    min-height: 100vh;
}
</style>