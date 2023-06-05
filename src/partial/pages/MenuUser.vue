<template class="menu-hero">
    <div class="restaurant">
        <div class="container">

            <!-- Pulsante back to Home -->

            <button class="btn btn-primary mt-3 back-home" @click="$router.push('/')">
                <img src="https://cdn.pixabay.com/photo/2021/07/22/00/43/back-6484174_1280.png" alt="go-back">
                Torna alla home</button>




            <div class="row justify-content-center">
                <div class="col-12 col-md-6 description ">
                    <h2 class="title-description">{{ restaurant.restaurant_name }}</h2>
                    <h5> Dove siamo: {{ restaurant.address }}</h5>

                    <ul v-for="(tipology, j) in restaurant.types" class="list-group m-3">
                        <li class="list-group-item">{{ tipology.name }}</li>
                    </ul>


                    <div class="col-4 description-image">
                        <img :src="restaurant.image_path" alt="">
                    </div>
                </div>

                <div class="plates p-3 col-6">
                    <div class="row row-plates p-1">
                        <div class="col-1 arrow sx" @click="previousPagePlate" :disabled="currentPagePlate === 1">
                            <img src="https://cdn.pixabay.com/photo/2012/04/13/00/19/arrow-31203_1280.png"
                                alt="freccia-destra">
                        </div>

                        <div class="row col-10 justify-content-center p-2">
                            <h2 class="title-responsive">Sfoglia il nostro menù!</h2>

                            <template v-for="(plate, index) in paginatePlates" :key="index">
                                <div class="col-4 p-3" height="200px">
                                    <img :src="plate.thumb_path" alt="">
                                    <h5 class="mt-3 text-uppercase">{{ plate.name }}</h5>
                                    <span class="plate-ingredient">{{ plate.ingredient }}</span>
                                    <p class="mt-2">{{ plate.price }} &euro;</p>
                                    <button class="carrello" @click="cartList(plate)">
                                        <img src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_1280.png"
                                            alt="carrello">
                                    </button>
                                </div>
                            </template>
                        </div>

                        <div class="col-1 arrow dx" @click="nextPagePlate" :disabled="currentPagePlate === totalPagesPlate">
                            <img src="https://cdn.pixabay.com/photo/2012/04/13/00/20/arrow-31212_1280.png"
                                alt="freccia-destra">
                        </div>
                    </div>

                    <div class="paginate">
                        <template v-if="totalPagesPlate === 0">
                            <div class="col-6 pagination text-center">
                                <p> 0 di {{ totalPagesPlate }}</p>
                            </div>
                        </template>

                        <template v-if="totalPagesPlate > 0">
                            <div class="col-6 pagination text-center">
                                <p>{{ currentPagePlate }} di {{ totalPagesPlate }}</p>
                                <!-- <p>{{ selectedTypes.join(', ') }}</p> -->
                            </div>
                        </template>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <Cart :cart="cart" :restaurantID="restaurantID"></Cart>
</template>

<script>

import axios from 'axios'

import Cart from '../components/Cart.vue';

export default {

    components: {
        Cart,
    },

    data() {
        return {

            currentPagePlate: 1,
            itemsPerPagePlate: 3,

            restaurantID: this.$route.params.id,
            plates: [],

            restaurant: [],
            cart: [],

        }
    },

    created() {
        console.log(this.fetchPost());
        console.log(this.cart);
    },

    methods: {

        fetchPost() {
            axios.get(`http://127.0.0.1:8000/api/restaurants/${this.restaurantID}`)
                .then(res => {

                    this.plates = res.data.restaurant.products
                    // this.openingHours = res.data.restaurant.openingHours;
                    // console.log(this.plates);

                    this.restaurant = res.data.restaurant
                    // console.log(this.restaurant)


                })
                .catch(err => {
                    console.log(err)
                    // this.$router.replace({ name: '404' })
                })
        },

        cartList(currentPlate) {

            const existingPlate = this.cart.find(item => item.plate === currentPlate);

            if (existingPlate) {
                existingPlate.quantity++;
            } else {
                this.cart.push({ plate: currentPlate, quantity: 1 });
            }
            console.log(this.cart);
        },


        /* PAGINATION*/
        previousPagePlate() {
            if (this.currentPagePlate > 1) {
                this.currentPagePlate--;
            } else if (this.currentPagePlate === 1) {
                this.currentPagePlate = this.totalPagesPlate
            }
        },
        nextPagePlate() {
            if (this.currentPagePlate < this.totalPagesPlate) {
                this.currentPagePlate++;
            }
            else if (this.currentPagePlate === this.totalPagesPlate) {
                this.currentPagePlate = 1
            }
        },
        pagesResest() {
            this.currentPagePlate = 1
        },
    },

    computed: {
        /* PAGINATION*/
        paginatePlates() {
            const start = (this.currentPagePlate - 1) * this.itemsPerPagePlate;
            const end = start + this.itemsPerPagePlate;
            // console.log(this.plates.slice(start, end))
            return this.plates.slice(start, end);
        },
        totalPagesPlate() {
            return Math.ceil(this.plates.length / this.itemsPerPagePlate);
        },

    }

}


</script>

<style lang="scss" scoped>
.back-home {
    background-color: rgb(255, 91, 0);
    border: 1px solid rgb(255, 238, 99);
    text-transform: uppercase;
    width: 150px;
    height: 30px;
    font-size: 10px;
    position: absolute;
    left: 0;
}

.back-home img {
    width: 20px;
}

.description {
    background-color: rgba(255, 255, 255, 0.303);
    text-align: center;
    padding: 15px;
    width: 400px;
    margin-top: 200px;
    border-radius: 10px;
    color: rgb(0, 0, 0);

    .list-group-item {
        background-color: rgba(255, 89, 0, 0.769);
        color: white;
        text-transform: uppercase;

    }

    .title-description {
        color: rgb(255, 91, 0);
        ;
    }

    .description-image {
        width: 400px;
    }

    .description-image img {
        width: 200px;
    }
}





.restaurant {
    background-image: url('../components/img/menu-pattern.jpg');
    background-size: cover;
    height: auto;
    padding-bottom: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;

    .col-4.p-3:hover {
        box-shadow: 0 0 30px rgba(246, 232, 123, 0.768);
        ;
        transform: translateY(-5px);
    }

    .plates {
        background-color: rgba(0, 128, 0, 0);
        height: 600px;
        width: 680px;
        position: relative;
        top: 400px;
        right: -185px;
        color: white;
        margin-bottom: 150px;
        /* Aggiunto spazio tra plates e footer */

        .paginate {
            display: flex;
            justify-content: center;

            .pagination {
                display: flex;
                justify-content: center;
            }
        }
    }

    .plate-ingredient {
        font-size: 9px;
        text-align: center;

    }

    .carrello {
        width: 30px;
        background-color: rgb(255, 255, 255);
        padding: 3px;
        margin-left: 35px;

    }

    .carrello:hover {
        transform: scale(1.5);
    }

    .arrow {
        position: relative;
        top: 150px;
    }

    .title-responsive {
        text-align: center;
        color: rgb(255, 91, 0);
        margin-bottom: 20px;
    }

}



// RESPONSIVE RULES
@media (max-width: 768px) {
    .description {
        width: 80%;
        margin-bottom: 20px;
        background-color: rgba(255, 89, 0, 0.8);
        color: white;
        
    }

    .title-description {
        color: white;
    }

    .restaurant {
        background-image: url(../components/img/pettern-hero-responsive.jpg);




    }

    .plates {
        position: relative;
        width: 90%;
        max-height: 350px;
        margin: 0 auto;


    }

    .row-plates {
        background-color: rgb(255, 202, 29);
        border-radius: 50px;
        height: 300px;



    }




    .arrow {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 10px;
    }

    .sx {
        right: auto;
        left: 150px;
    }

    .dx {
        left: auto;
        right: -60px;
    }

    .col-3.p-3:hover {
        box-shadow: 0 0 30px rgb(255, 91, 0);
        transform: translateY(-5px);
    }


    .plate-ingredient {
        display: none;
    }

    .carrello {
        display: block;
        width: 5px;
    }

    .col-4 {
        display: inline-block;
        width: 80px;
        margin: 10px;
        vertical-align: top;
    }

}


// RESPONSIVE TABLET

@media (max-width: 1355px) {
    .description {
        width: 80%;
        margin-bottom: 20px;
        background-color: rgba(255, 89, 0, 0.8);
        color: white;
        margin-top: 200px;
    }

    .restaurant {
        background-image: url(../components/img/pettern-hero-responsive.jpg);
        height: 1180px;
        margin-top: -200px;


    }

    .plates {
        margin-top: -400px;
        margin-right: 375px;
        margin-bottom: 100px;

    }

    .plates .row {
        background-color: rgb(255, 202, 29);
        border-radius: 50px;
        height: 400px;


    }



    .arrow {
        width: 40px;
        height: 30px;
        margin-top: 200px;
        background-color: rgba(255, 89, 0, 0.681);
    }

    .sx {
        position: relative;
        right: -130px;
        

    }

    .dx {
        position: relative;
        left: -130px;
    }

    .col-3.p-3:hover {
        box-shadow: 0 0 30px rgb(255, 91, 0);
        transform: translateY(-5px);
    }


}
</style>