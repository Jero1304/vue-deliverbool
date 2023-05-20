<template>
    <div class="restaurant-type row">

        <div class="aside col-1">
            <div class="aside_type">
                <div v-for="(type, index) in types" @click="typeSelection(index, type)"
                    :class="{ 'active': index === currentIndex }">
                    <img src="../../../public/img/hamburger-logo.png" alt="">
                    <p>{{ type }}</p>
                </div>


            </div>
        </div>

        <div class="restaurants col-11">
            <div class="container">
                <div class="row restaurants_grid">
                    <template v-for="(restaurant, i) in restaurants">
                        <div class="col-3" v-if="restaurant.type === currentType">
                            <img src="https://picsum.photos/200/300" alt="">
                            {{ restaurant.name }}
                            {{ restaurant.type }}
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
];

const restaurantType = [
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
.restaurant-type {
    flex-direction: row;
    margin: 0;
    flex-wrap: nowrap;
    flex-shrink: 1;
    height: auto;

    .aside {
        background-color: red;
        // min-height: 200px;
        margin: 0;

        .aside_type {
            padding: 0;
            margin: 0;
            height: 100%;
            display: flex;
            flex-direction: column;

            .active {
                background-color: aqua;
            }

            button {
                padding: 20px;
                margin: 10px 0;
            }
        }
    }

    .restaurants {
        background-color: blue;
        // min-height: 200px;
        margin: 0;

        .restaurants_grid {
            // display: flex;
            // flex-direction: row;

            .col-3 {
                display: flex;
                border: 1px solid red;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding-bottom: 20px;
                margin: 0;

                img {
                    width: 100px;
                    height: 100px;
                    border-radius: 999px;
                    margin: 20px 0;
                }

            }
        }
    }
}
</style>