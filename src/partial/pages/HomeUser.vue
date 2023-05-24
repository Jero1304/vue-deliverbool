<template>
    <Delivery></Delivery>
    <RestaurantsType></RestaurantsType>
    <Download></Download>
</template>

<script>
import Delivery from '../components/Delivery.vue';
import Download from '../components/Download.vue';
import RestaurantsType from '../components/RestaurantsType.vue';

export default {
    components:{
        Delivery,
        Download,
        RestaurantsType,
    }
}
</script>

<style scoped>

</style>