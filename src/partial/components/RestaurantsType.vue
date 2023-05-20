<template>
    <div class="restaurant-type row">

        <div class="aside col-2">
            <div class="aside_type">
                <div class="aside_card" v-for="(type, index) in types" @click="typeSelection(index, type)"
                    :class="{ 'active': index === currentIndex }">
                    <img src="../../../public/img/hamburger-logo.png" alt="">
                    <p>{{ type }}</p>
                </div>


            </div>
        </div>

        <div class="restaurants col-10">
            <div class="container">
                <div class="row restaurants_grid">
                    <template v-for="(restaurant, i) in restaurants">
                        <div class="col-2" v-if="restaurant.type === currentType">
                            <img src="https://picsum.photos/200/300" alt="">
                            <p class="restaurant-title">{{ restaurant.name }}</p>
                            <!-- <p>{{ restaurant.type }}</p> -->
                        </div>
                    </template>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
const restaurants = [
    {
        name: 'Da Dario',
        type: 'pizzeria'
    },
    {
        name: 'Da Luigi',
        type: 'italiano'
    },
    {
        name: 'Genki Sushi',
        type: 'sushi'
    },
    {
        name: 'Hola Hola',
        type: 'messicano'
    },
    {
        name: 'Pizza a Pezzi',
        type: 'pizzeria'
    },
    {
        name: 'Dalla nonna',
        type: 'italiano'
    },
    {
        name: 'Chico',
        type: 'messicano'
    },
    {
        name: 'Ghoan',
        type: 'sushi'
    },
    {
        name: 'MC Donald\'s',
        type: 'fastFood'
    },
    {
        name: 'Burgerz',
        type: 'fastFood'
    },
    {
        name: 'Da Dario',
        type: 'pizzeria'
    },
    {
        name: 'Da Luigi',
        type: 'italiano'
    },
    {
        name: 'Genki Sushi',
        type: 'sushi'
    },
    {
        name: 'Hola Hola',
        type: 'messicano'
    },
    {
        name: 'Pizza a Pezzi',
        type: 'pizzeria'
    },
    {
        name: 'Dalla nonna',
        type: 'italiano'
    },
    {
        name: 'Chico',
        type: 'messicano'
    },
    {
        name: 'Ghoan',
        type: 'sushi'
    },
    {
        name: 'MC Donald\'s',
        type: 'fastFood'
    },
    {
        name: 'Burgerz',
        type: 'fastFood'
    },
    {
        name: 'Da Dario',
        type: 'pizzeria'
    },
    {
        name: 'Da Luigi',
        type: 'italiano'
    },
    {
        name: 'Genki Sushi',
        type: 'sushi'
    },
    {
        name: 'Hola Hola',
        type: 'messicano'
    },
    {
        name: 'Pizza a Pezzi',
        type: 'pizzeria'
    },
    {
        name: 'Dalla nonna',
        type: 'italiano'
    },
    {
        name: 'Chico',
        type: 'messicano'
    },
    {
        name: 'Ghoan',
        type: 'sushi'
    },
    {
        name: 'MC Donald\'s',
        type: 'fastFood'
    },
    {
        name: 'Burgerz',
        type: 'fastFood'
    },
    {
        name: 'Da Dario',
        type: 'pizzeria'
    },
    {
        name: 'Da Luigi',
        type: 'italiano'
    },
    {
        name: 'Genki Sushi',
        type: 'sushi'
    },
    {
        name: 'Hola Hola',
        type: 'messicano'
    },
    {
        name: 'Pizza a Pezzi',
        type: 'pizzeria'
    },
    {
        name: 'Dalla nonna',
        type: 'italiano'
    },
    {
        name: 'Chico',
        type: 'messicano'
    },
    {
        name: 'Ghoan',
        type: 'sushi'
    },
    {
        name: 'MC Donald\'s',
        type: 'fastFood'
    },
    {
        name: 'Burgerz',
        type: 'fastFood'
    },
];

const restaurantType = [
    'Seleziona',
    'fastFood',
    'sushi',
    'italiano',
    'pizzeria',
    'messicano',
];

export default {
    data() {
        return {
            restaurants: restaurants,
            types: restaurantType,
            currentIndex: 0,
            currentType: '',
        }
    },
    methods: {
        typeSelection(index, type) {
            this.currentIndex = index
            this.currentType = type
            console.log(this.currentIndex);
            // console.log(this.currentType);
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
            .col-2 {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding-bottom: 20px;
                margin: 0;
                color: white;

                .restaurant-title {

                }
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
}</style>