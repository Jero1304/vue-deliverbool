<template>
    <!-- <div class="row title text-capitalize"> -->
        <!-- <div class="contaier">

            <h1>I nostri ristoranti</h1>

            <template v-if="selectedTypes.length === 0">
                <div class="types">
                    <h3 class="">Seleziona categorie </h3>
                </div>

                <div class="arrow">
                    <img class="logo-arrow" src="./img/freccia.png" alt="">
                </div>
            </template>

            <template v-else-if="selectedTypes.length > 0">
                <div class="types">
                    <h3 class="">Categorie Selezionate: </h3>
                    <p class="badge bg-primary" v-for="(types, index) in selectedTypes">{{ types }}</p>
                </div>
                <button type="button" @click="filterReset()" class="btn btn-light">Reset Filter</button>
            </template>
        </div> -->

    <!-- </div> -->

    <!-- <div class="restaurant-type row"> -->


        <!-- <div class="aside col-2">
            <div class="aside_type">
                <div class="d-flex justify-content-center align-items-center" @click="previousPageType"
                    :disabled="currentPageType === 1">
                    <font-awesome-icon class="d-sm-none d-md-flex font-awesome-icon" icon="fa-solid fa-arrow-up" />
                    <font-awesome-icon class="d-sm-flex d-md-none font-awesome-icon" icon="fa-solid fa-arrow-left" />
                </div>

                <div class="aside_card" v-for="(type, index) in paginateType" :key="type" @click="toggleSelection(type)"
                    :class="{ active: isSelected(type) }">
                    <img src="../../../public/img/hamburger-logo.png" alt="">
                    <img src="../../../public/images/hamburger-logo.png" alt="">
                    <p>{{ type }}</p>
                </div>

                <div class="d-flex justify-content-center align-items-center" @click="nextPageType"
                    :disabled="currentPageType === totalPagesType">
                    <font-awesome-icon class="d-sm-none d-md-flex font-awesome-icon" icon="fa-solid fa-arrow-down" />
                    <font-awesome-icon class="d-sm-flex d-md-none font-awesome-icon" icon="fa-solid fa-arrow-right" />
                </div>
            </div>
        </div> -->


        <!-- <div class="restaurants col-10">
            <div class="container mx-3">
                <div class="row restaurant-menu">

                    <div class="col-12 row mb-5 justify-content-between"> -->

                        <!-- <div class="col-1" @click="previousPageRestaurant" :disabled="currentPageRestaurant === 1">
                            <font-awesome-icon class="font-awesome-icon" icon="fa-solid fa-arrow-left" />
                        </div> -->
                        <!-- <template v-if="totalPagesRestaurant === 0">
                            <div class="col-1">
                            <div class="col-3" @click="previousPageRestaurant" :disabled="currentPageRestaurant === 1">
                                <font-awesome-icon class="font-awesome-icon" icon="fa-solid fa-arrow-left" />
                            </div
                        </template> -->
                        <!-- errore -->

                        <!-- <template v-if="totalPagesRestaurant === 0">
                            <div class="col-6 text-center">
                                <p> 0 di {{ totalPagesRestaurant }}</p>
                            </div>
                        </template> -->

                        <!-- <template v-if="totalPagesRestaurant > 0">
                            <div class="col-1">
                        errore -->

                        <!-- <template v-if="totalPagesRestaurant > 0">
                            <div class="col-6 text-center">
                                <p>{{ currentPageRestaurant }} di {{ totalPagesRestaurant }}</p>
                            </div>
                        </template> -->

                        <!-- <div class="col-3 d-flex justify-content-end" @click="nextPageRestaurant"
                            :disabled="currentPageRestaurant === totalPagesRestaurant">
                            <font-awesome-icon class="font-awesome-icon" icon="fa-solid fa-arrow-right" />
                        </div> -->
                    <!-- </div>

                </div> -->

                <!-- <div class="col-12 mt-4">
                    <div class="row justify-content-center restaurants_grid">
                        <template v-for="( restaurant, i ) in  paginateRestaurants " :key="i">
                            <div class="col-md-6 col-sm-10  p-2 ">
                                <div class="row restaurant-card">
                                    <div class="col-4 restaurant-image">
                                        <img src="https://picsum.photos/200/300" alt="">
                                    </div>
                                    <div class="col-10 restaurant-info">
                                        <div class="row justify-content-between align-items-center">
                                            <div class="col-5">
                                                <p class="restaurant-title my-0">{{ restaurant.name }}</p>
                                                <p>{{ restaurant.type.join(', ') }}</p>
                                            </div>
                                            <div class="col-6">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                                                    ipsa
                                                    natus mollitia.</p>
                                                natus mollitia.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div> -->

            <!-- </div>
        </div> -->
    <!-- </div> -->
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
    }, {
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

            currentIndexType: null,
            currentType: '',
            selectedTypes: [],

            currentPageRestaurant: 1,
            itemsPerPageRestaurant: 6,

            currentPageType: 1,
            itemsPerPageType: 4,

            click: false,
        }
    },
    methods: {
        typeSelection(index, type) {
            this.currentIndexType = index;
            this.currentType = type;

            // Aggiungi o rimuovi il 'type' dall'array selectedTypes in base alla sua selezione
            const selectedIndex = this.selectedTypes.indexOf(type);
            if (selectedIndex > -1) {
                this.selectedTypes.splice(selectedIndex, 1); // Rimuovi il 'type' se è già presente nell'array
            } else {
                this.selectedTypes.push(type); // Aggiungi il 'type' se non è presente nell'array
            }
        },
        // pagesResest() {
        // },
        toggleSelection(type) {
            if (this.isSelected(type)) {
                // Remove type if already selected
                const index = this.selectedTypes.indexOf(type);
                if (index > -1) {
                    this.selectedTypes.splice(index, 1);
                }
            } else {
                // Add type if not selected
                this.selectedTypes.push(type);
            }
            console.log(this.selectedTypes);
            this.currentPageRestaurant = 1

        },
        isSelected(type) {
            return this.selectedTypes.includes(type);
        },
        //type carusell
        previousPageType() {
            if (this.currentPageType > 1) {
                this.currentPageType--;
                this.currentIndexType = null
            }
            console.log(this.currentPageType);
        },
        nextPageType() {
            if (this.currentPageType < this.totalPagesType) {
                this.currentPageType++;
                this.currentIndexType = null

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
            const rest = [];
            if (this.selectedTypes.length == 0)
                return rest
            for (let j = 0; j < this.restaurants.length; j++) {
                let hasAllSelectedTypes = true;
                for (let i = 0; i < this.selectedTypes.length; i++) {
                    if (!this.restaurants[j].type.includes(this.selectedTypes[i])) {
                        hasAllSelectedTypes = false;
                        break;
                    }
                }
                if (hasAllSelectedTypes) {
                    rest.push(this.restaurants[j]);
                }
            }

            return rest;
        },
        filterReset() {
            this.selectedTypes = []
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

.title {
    text-align: center;
    padding: 40px 0 40px;
    background-color: rgba(214, 24, 24, 1);
    width: 100%;
    margin: 0;
    height: 400px;

    h1 {
        font-size: 60px;
        color: white;
    }

    .types {
        text-align: center;
        padding: 20px;
        margin-bottom: 30px;

        p {
            font-size: 16px;
            margin: 0 5px;
        }
    }

    .arrow {
        position: relative;

        .logo-arrow {
            width: 200px;
            position: absolute;
            left: 150px;
            bottom: -60px;
            transform: rotate(350deg);

        }
    }
}

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
            justify-content: start;

            .font-awesome-icon {
                background-color: rgb(215, 6, 6);
                border-radius: 20px;
                box-shadow: 0px 0px 10px 10px rgb(215, 6, 6);
                padding: 10px;
                display: flex;
                justify-content: center;
                margin: 10px;
                border-radius: 999px;
                font-size: 18px;
                height: 26px;
                width: 26px;
                color: white;

                &:hover {
                    text-decoration-color: white;
                    transition: transform 0.3s ease;
                    transition: text-shadow 0.3s ease;
                    text-shadow: 0 0 5px white;
                    background-color: white;
                    color: red;
                    box-shadow: 0px 0px 10px 10px white;
                }

            }

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



        .font-awesome-icon {
            background-color: white;
            border-radius: 20px;
            box-shadow: 0px 0px 10px 10px white;
            padding: 10px;
            display: flex;
            justify-content: center;
            margin: 10px;
            border-radius: 999px;
            font-size: 18px;
            height: 26px;
            width: 26px;
            color: rgb(215, 6, 6);

            &:hover {
                text-decoration-color: white;
                transition: transform 0.3s ease;
                transition: text-shadow 0.3s ease;
                text-shadow: 0 0 5px white;
                background-color: rgb(215, 6, 6);
                color: white;
                box-shadow: 0px 0px 10px 10px white;
            }

        }

        .restaurant-menu {

            .restaurants_grid {
                align-items: center;

                // justify-content: center;
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

                .restaurant-card {
                    background: rgb(223, 82, 82);
                    background: linear-gradient(180deg, rgba(223, 82, 82, 1) 41%, rgba(214, 24, 24, 1) 87%);
                    margin: 0 10px 80px 10px;
                    border-radius: 40px;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    max-height: 600px;


                    &:hover {
                        background: rgb(223, 82, 82);
                        text-shadow: 0 0 10px $yellow;
                        font-weight: 600;
                        color: black;
                        box-shadow: 0 0 10px white;

                        img {
                            box-shadow: 0 0 40px $yellow;
                        }

                    }

                    .restaurant-image {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        top: -60px;

                        img {
                            aspect-ratio: 1/1;
                            border-radius: 999px;
                            width: 80%;
                        }
                    }

                    .restaurant-info {
                        margin-top: 60px;
                        padding-top: 40px;

                        .restaurant-title {
                            font-size: 28px;
                            color: white;
                        }
                    }


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