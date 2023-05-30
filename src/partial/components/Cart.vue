<template>
    <div class="container">
        <div class="list-group">
            <div v-for="(order, index) in orders" class="list-group-item list-group-item-action">
                <!-- <div class="d-flex w-100 justify-content-between">
                    <img class="w-25" :src="order.thumb" alt="">
                    <h5 class="mb-1">{{ order.name }}</h5>
                    <small>{{ order.price }} $</small>
                </div>
                <p class="mb-1">{{ order.ingredient }}</p> -->
                <!-- <small>And some small print.</small> -->

                <div class="row w-75">
                    <div class="col">
                        <img class="w-25" :src="order.thumb" alt="">
                    </div>
                    <div class="col">
                        <h5 class="mb-1">{{ order.name }}</h5>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>

const orders = [
    {
        name: 'pizza',
        ingredient: 'Sugo mozzarella olive ',
        price: 12.77,
        thumb: 'https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_1280.jpg',
    },
    {
        name: 'pasta al sugo',
        ingredient: 'Sugo ',
        price: 7.29,
        thumb: 'https://media.istockphoto.com/id/155433174/it/foto/penne-al-sugo.jpg?s=1024x1024&w=is&k=20&c=H-EzF23OGEsMrnJbnhvOgEk-tRI-TrzolJ66j5PSAN4=',
    },
    {
        name: 'misto fritto',
        ingredient: 'pesci fritti',
        price: 10.47,
        thumb: 'https://media.istockphoto.com/id/967914044/it/foto/pesce-di-mare-fritto-italiano.jpg?s=1024x1024&w=is&k=20&c=qswNhZ4qsMqU_-5NLC6_u__WPMaccPJYkHGNAta_uSo=',
    },
    {
        name: 'carbonara',
        ingredient: 'uovo pancetta pecorino ',
        price: 11.58,
        thumb: 'https://media.istockphoto.com/id/1312758295/it/foto/pasta-tradizionale-italiana-alla-carbonara-con-uova-di-guanciale-e-pecorino.jpg?s=1024x1024&w=is&k=20&c=jHGUnLVjnXYxYdEX8yQteyi9zaQBt7kHvtp6ADHYmMA=',
    },
    {
        name: 'caffe\' ',
        ingredient: 'caffe\' ',
        price: 1.00,
        thumb: 'https://cdn.pixabay.com/photo/2013/11/05/23/55/coffee-206142_1280.jpg',
    },
]
export default {
    data() {
        return {
            orders: orders
        }
    },
}
</script>

<style lang="scss" scoped></style>