<template>
    <Hero></Hero>
    <Delivery></Delivery>
    <RestaurantsType></RestaurantsType>
    <Download></Download>
</template>

<script>
import Delivery from '../components/Delivery.vue';
import Download from '../components/Download.vue';
import RestaurantsType from '../components/RestaurantsType.vue';
import Hero from '../components/Hero.vue';

export default {
    components:{
        Hero,
        Delivery,
        Download,
        RestaurantsType,
    }
}
</script>

<style scoped>

</style>