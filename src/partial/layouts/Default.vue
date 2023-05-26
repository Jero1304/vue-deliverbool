<template>
    <header>
        <NavBar></NavBar>
    </header>

    <main>
        <router-view></router-view>
    </main>

    <footer>
        <Footer></Footer>
    </footer>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import Blank from './Blank.vue';

export default {
    components: {
        NavBar,
        Footer,
        Blank,
    }
}
</script>

<style scoped lang="scss">
.h-screen {
    min-height: 100vh;
}
</style>