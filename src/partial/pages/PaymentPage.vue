<template>
    <Payment></Payment>
</template>

<script>
import Payment from "../components/Payment.vue"

export default {
    data() {
        return {
            // orderList:this.$route.params
        }
    },
    components: {
        Payment,
    },
    // props: {
    //     orderInfo:{
    //         type: Object,
    //         required:true,
    //     }
    // },
    mounted() {
        // console.log(this.orderList);
        // console.log(this.orderInfo);
    },
}
</script>

<style lang="scss">
@import '../src/scss/variables.scss';
</style>

