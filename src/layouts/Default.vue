<template>
    <header>
        <NavBar></NavBar>
    </header>

    <main class="h-screen">
        <!-- <slot/> -->
        <Delivery></Delivery>
        <!-- <Main></Main> -->
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

export default {
    components:{
        NavBar,
        Footer,
        Main,
        Delivery,
        Card
    }
}
</script>

<style scoped lang="scss">
.h-screen{
    min-height: 100vh;
}
</style>