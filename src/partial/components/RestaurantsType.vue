<template>
    <div class="restaurant-type row">

        <div class="aside col-2">
            <div class="aside_type">
                <div @click="previousPageType" :disabled="currentPageType === 1">
                    SU
                </div>
                <div class="aside_card" v-for="(type, index) in paginateType"
                    @click="typeSelection(index, type), currentTypeRest(),pagesResest()"
                    :class="{ 'active': index === currentIndexType }">
                    <img src="../../../public/img/hamburger-logo.png" alt="">
                    <img src="../../../public/images/hamburger-logo.png" alt="">
                    <p>{{ type }}</p>
                </div>

                <div @click="nextPageType" :disabled="currentPageType === totalPagesType">
                    GIU
                </div>


            </div>
        </div>


        <div class="restaurants col-10">
            <div class="container mx-3">
                <div class="row">

                    <div class="col-1" @click="previousPageRestaurant" :disabled="currentPageRestaurant === 1">sinistra
                    </div>

                    <div class="row col-10 justify-content-center restaurants_grid">
                        <template v-for="(restaurant, i) in paginateRestaurants" :key="i">

                            <div class="col-sm-4 col-md-2" v-if="restaurant.type.includes(currentType)">
                                <img src="https://picsum.photos/200/300" alt="">
                                <p class="restaurant-title">{{ restaurant.name }}</p>
                                <!-- <p>{{ restaurant.type.join(', ') }}</p> -->

                            </div>
                        </template>
                    </div>

                    <div class="col-1" @click="nextPageRestaurant"
                        :disabled="currentPageRestaurant === totalPagesRestaurant">destra</div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
const restaurants = [
    {
        name: 'Da Dario 2',
        type: [
            'pizzeria',
            'italiano'
        ]
    },
    {
        name: 'Da Luigi 2',
        type: [
            'pizzeria',
            'italiano'
        ]
    },
    {
        name: 'Genki Sushi 2',
        type: [
            'pizzeria',
            'sushi'
        ]
    },
    {
        name: 'Hola Hola 2',
        type: [
            'messicano',
            'pizzeria'
        ]
    },
    {
        name: 'Pizza a Pezzi 2',
        type: [
            'pizzeria',
            'fastFood'
        ]
    },
    {
        name: 'Dalla nonna 2',
        type: [
            'pizzeria',
            'italiano'
        ]
    },
    {
        name: 'Chico 2',
        type: [
            'messicano',
        ]
    },
    {
        name: 'Ghoan 2',
        type: [
            'pizzeria',
            'sushi',
            'fastFood'
        ]
    },
    {
        name: 'MC Donald\'s 2',
        type: [
            'FastFood',
        ]
    },
    {
        name: 'Burgerz 2',
        type: [
            'pizzeria',
            'fastFood',
            'italiano'
        ]
    },
    {
        name: 'Da Dario',
        type: [
            'pizzeria',
            'italiano'
        ]
    },
    {
        name: 'Da Luigi',
        type: [
            'pizzeria',
            'italiano'
        ]
    },
    {
        name: 'Genki Sushi',
        type: [
            'pizzeria',
            'sushi'
        ]
    },
    {
        name: 'Hola Hola',
        type: [
            'messicano',
            'pizzeria'
        ]
    },
    {
        name: 'Pizza a Pezzi',
        type: [
            'pizzeria',
            'fastFood'
        ]
    },
    {
        name: 'Dalla nonna',
        type: [
            'pizzeria',
            'italiano'
        ]
    },
    {
        name: 'Chico',
        type: [
            'messicano',
        ]
    },
    {
        name: 'Ghoan',
        type: [
            'pizzeria',
            'sushi',
            'fastFood'
        ]
    },
    {
        name: 'MC Donald\'s',
        type: [
            'FastFood',
        ]
    },
    {
        name: 'Burgerz',
        type: [
            'pizzeria',
            'fastFood',
            'italiano'
        ]
    },



];

const restaurantType = [
    'Seleziona',
    'fastFood',
    'sushi',
    'italiano',
    'pizzeria',
    'messicano',
    'thai',
    'eee',
    '33333'
];

export default {
    data() {
        return {
            restaurants: restaurants,
            types: restaurantType,

            currentIndexType: 0,
            currentType: '',

            currentPageRestaurant: 1,
            itemsPerPageRestaurant: 5,

            currentPageType: 1,
            itemsPerPageType: 4,
        }
    },
    methods: {
        typeSelection(index, type) {
            this.currentIndexType = index
            this.currentType = type
        },
        pagesResest(){
            this.currentPageRestaurant = 1
        },

        //type carusell
        previousPageType() {
            if (this.currentPageType > 1) {
                this.currentPageType--;
            }
            console.log(this.currentPageType);
        },
        nextPageType() {
            if (this.currentPageType < this.totalPagesType) {
                this.currentPageType++;
            }
            console.log(this.currentPageType);
        },



        // restaurants carusel
        previousPageRestaurant() {
            if (this.currentPageRestaurant > 1) {
                this.currentPageRestaurant--;
            }
        },
        nextPageRestaurant() {
            if (this.currentPageRestaurant < this.totalPagesRestaurant) {
                this.currentPageRestaurant++;
            }
        },
        currentTypeRest() {
            const restaurant = []
            for (const res of this.restaurants) {
                if (res.type.includes(this.currentType)) {
                    restaurant.push(res)
                }
            }
            return restaurant
        }
        //_________________________________




    },
    computed: {
        // restaurants carusel
        paginateRestaurants() {
            const start = (this.currentPageRestaurant - 1) * this.itemsPerPageRestaurant;
            const end = start + this.itemsPerPageRestaurant;
            return this.currentTypeRest().slice(start, end);
        },
        totalPagesRestaurant() {
            return Math.ceil(this.currentTypeRest().length / this.itemsPerPageRestaurant);
        },
        //_________________________________

        //type carusel
        paginateType() {
            const start = (this.currentPageType - 1) * this.itemsPerPageType;
            const end = start + this.itemsPerPageType;
            return this.types.slice(start, end);
        },
        totalPagesType() {
            return Math.ceil(this.types.length / this.itemsPerPageType);
        },


    },


}
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';

.restaurant-type {
    flex-direction: row;
    margin: 0;
    flex-wrap: nowrap;
    flex-shrink: 1;
    height: auto;

    .aside {
        // background-color: rgb(240, 3, 3);
        background: rgb(139, 0, 0);
        background: linear-gradient(270deg, rgba(214, 24, 24, 1) 0%, rgba(107, 0, 0, 1) 100%);
        // min-height: 200px;
        margin: 0;
        display: flex;
        justify-content: center;


        .aside_type {
            padding: 10px 0;
            margin: 0;
            height: 100%;
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: end;

            .aside_card {
                width: 170px;
                height: 170px;
                color: rgb(187, 184, 184);
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                img {
                    max-width: 60%;
                }
            }

            .active {
                background-color: rgb(214, 24, 24);
                border-radius: 20px;
                box-shadow: 70px 10px 5px rgb(214, 24, 24),
                    -10px -10px 5px rgb(214, 24, 24),
                    70px -10px 5px rgb(214, 24, 24),
                    -10px 10px 5px rgb(214, 24, 24);
                text-decoration-color: white;
                transition: transform 0.3s ease;
                transition: text-shadow 0.3s ease;
                text-shadow: 0 0 5px white;
                font-weight: 600;
                color: white;
                margin: 40px;

                img {
                    max-width: 70%;
                }

                img,
                p {
                    transform: scale(1.2);
                }
            }

            button {
                padding: 20px;
                margin: 10px 0;
            }
        }
    }

    .restaurants {
        background-color: rgb(214, 24, 24);
        margin: 0;
        padding: 50px 0;

        .restaurants_grid {
            .col-md-2 {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding-bottom: 20px;
                margin: 0;
                color: white;

                &:hover {
                    text-decoration-color: white;
                    transition: transform 0.3s ease;
                    transition: text-shadow 0.3s ease;
                    text-shadow: 0 0 5px $yellow;
                    font-weight: 800;
                    color: $yellow;
                }

                img {
                    width: 100px;
                    height: 100px;
                    border-radius: 30px;
                    margin: 20px 0;
                }
            }
        }
    }
}

@media screen and (max-width:768px) {
    .restaurant-type {
        flex-direction: column;
        margin: 0;
        flex-wrap: nowrap;
        flex-shrink: 1;
        height: auto;

        .aside {
            background: rgb(214, 24, 24);
            background: linear-gradient(0deg, rgba(214, 24, 24, 1) 43%, rgba(107, 0, 0, 1) 100%);
            margin: 0;
            display: flex;
            justify-content: center;
            width: 100%;

            .aside_type {
                padding: 10px 0;
                margin: 0;
                height: 100%;
                display: flex;
                flex-direction: row;
                text-align: center;
                justify-content: end;
                overflow-x: auto;


                .aside_card {
                    width: 200px;
                    height: 100px;
                    color: rgb(187, 184, 184);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;

                    img {
                        max-width: 60%;
                    }
                }

                .active {
                    background-color: rgb(214, 24, 24);
                    border-radius: 20px 20px 0 0;
                    box-shadow: none;
                    text-decoration-color: white;
                    transition: transform 0.3s ease;
                    transition: text-shadow 0.3s ease;
                    text-shadow: 0 0 5px white;
                    font-weight: 600;
                    color: white;
                    margin: 0 5px;
                    padding: 10px;

                    img {
                        max-width: 80%;
                    }

                    img,
                    p {
                        transform: scale(1.2);
                    }
                }

                button {
                    padding: 20px;
                    margin: 10px 0;
                }
            }
        }

        .restaurants {
            background-color: rgb(214, 24, 24);
            margin: 0;
            padding: 50px 0;
            width: 100%;

            .restaurants_grid {
                .col-md-2 {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    padding-bottom: 20px;
                    margin: 0;
                    color: white;

                    &:hover {
                        text-decoration-color: white;
                        transition: transform 0.3s ease;
                        transition: text-shadow 0.3s ease;
                        text-shadow: 0 0 5px $yellow;
                        font-weight: 800;
                        color: $yellow;
                    }

                    img {
                        width: 100px;
                        height: 100px;
                        border-radius: 30px;
                        margin: 20px 0;
                    }
                }
            }
        }
    }
}
</style>