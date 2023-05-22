<template>
    <header>
        <NavBar></NavBar>
    </header>

    <main class="h-screen">
        <!-- <slot/> -->
        <Delivery></Delivery>
        <Main></Main>
        <Download></Download>
    </main>

    <footer>
        <Footer></Footer>
    </footer>
</template>

<script>
import NavBar from '../partial/components/NavBar.vue'
import Footer from '../partial/components/Footer.vue'
import Main from '../partial/components/Main.vue'
import Delivery from '../partial/components/Delivery.vue'
import Card from '../partial/components/Card.vue'
import Download from '../partial/components/Download.vue'

export default {
    components:{
        NavBar,
        Footer,
        Main,
        Delivery,
        Card,
        Download
    }
}
</script>

<style scoped lang="scss">
.h-screen{
    min-height: 100vh;
}
</style>