<template>
    <div class="row title pb-0 text-capitalize">
        <div class="contaier">

            <h1>I nostri ristoranti</h1>

            <template v-if="selectedTypes.length === 0">
                <div class="types">
                    <h3 class="">Seleziona categorie </h3>
                </div>
            </template>

            <template v-else-if="selectedTypes.length > 0">
                <div class="types mb-1">
                    <h3 class="">Categorie Selezionate: </h3>
                    <p class="badge bg-warning" v-for="(types, index) in selectedTypes">{{ types }}</p>
                </div>
                <button type="button" @click="filterReset()" class="btn btn-light">Reset Filter</button>
            </template>
        </div>

    </div>
    <div class="restaurant-type row">
        <div class="aside col-2">
            <div class="aside_type">

                <div class="aside_card" v-for="(type, index) in types"
                    @click="toggleSelection(type.name), fetchRestaurants()" :class="{ active: isSelected(type.name) }">
                    <img :src="type.thumb" alt="">
                    <!-- <p>{{ type.thumb }}</p> -->
                    <!-- <img src="./img/restaurantTypeImg/giapponese.png" alt=""> -->
                    <p>{{ type.name }}</p>
                </div>


            </div>
        </div>


        <div class="restaurants col-10">
            <div class="container">
                <div class="row restaurant-menu">

                    <div class=" navigation col-12 row justify-content-between">

                        <div class="col-3" @click="previousPageRestaurant" :disabled="currentPageRestaurant === 1">
                            <font-awesome-icon class="font-awesome-icon" icon="fa-solid fa-arrow-left" />
                        </div>

                        <template v-if="totalPagesRestaurant === 0">
                            <div class="col-6 pagination text-center">
                                <p> 0 di {{ totalPagesRestaurant }}</p>
                                <!-- <p>{{ selectedTypes.join(', ') }}</p> -->
                            </div>
                        </template>

                        <template v-if="totalPagesRestaurant > 0">
                            <div class="col-6 pagination text-center">
                                <p>{{ currentPageRestaurant }} di {{ totalPagesRestaurant }}</p>
                                <!-- <p>{{ selectedTypes.join(', ') }}</p> -->
                            </div>
                        </template>

                        <div class="col-3  d-flex justify-content-end" @click="nextPageRestaurant"
                            :disabled="currentPageRestaurant === totalPagesRestaurant">
                            <font-awesome-icon class="font-awesome-icon" icon="fa-solid fa-arrow-right" />
                        </div>

                    </div>

                    <div class="col-12 mt-4">
                        <div class="row justify-content-center restaurants_grid">

                            <template v-for="( restaurant, i ) in  paginateRestaurants " :key="i">
                                <div class="col-md-6 col-sm-10  p-2 ">
                                    <router-link class="router" :to="{ name: 'menu', params: { id: restaurant.id } }">
                                        <div class="row restaurant-card">
                                            <div class="col-4 restaurant-image">
                                                <img :src="restaurant.image_path" alt="" class="img-fluid">
                                            </div>
                                            <div class="col-10 restaurant-info pt-4">
                                                <div class="row justify-content-between justify-content-center align-items-center flex-column gap-3">
                                                    <div class="col-5">
                                                        <p class="restaurant-title my-0">
                                                            {{ restaurant.restaurant_name }}
                                                        </p>                                                        
                                                    </div>
                                                    <div class="col-5">
                                                        <ul v-for="(tipology, j) in restaurant.types" class="badge badge-pill badge-warning">
                                                            <li >{{ tipology.name }}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </router-link>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

const restaurantType = [
    {
        name: 'italiano',
        thumb: 'https://pngimg.com/d/pasta_PNG51.png',

    },
    {
        name: 'giapponese',
        thumb: 'https://cdn.pixabay.com/photo/2020/08/20/03/44/ramen-5502503_1280.png',

    },
    {
        name: 'thailandese',
        thumb: 'https://static.vecteezy.com/system/resources/previews/010/283/253/non_2x/thai-food-watercolor-hand-paint-free-png.png',

    },
    {
        name: 'vegano',
        thumb: 'https://cdn.pixabay.com/photo/2017/07/03/18/14/lettuce-2468495_1280.png',

    },
    {
        name: 'americano',
        thumb: 'https://clipart-library.com/image_gallery2/Hot-Dog-Transparent.png',

    },
    {
        name: 'fast food',
        thumb: 'https://www.pngmart.com/files/5/Hamburger-PNG-Transparent-Image.png',

    },
    {
        name: 'pizzeria',
        thumb: 'https://pngimg.com/d/pizza_PNG44090.png',

    }
];
import axios from 'axios'
export default {
    data() {
        return {
            restaurants: [],
            types: restaurantType,

            currentIndexType: null,
            currentType: '',
            selectedTypes: [],

            currentPageRestaurant: 1,
            itemsPerPageRestaurant: 6,

            click: false,
        }
    },
    created() {
        this.fetchRestaurants()
        console.log(this.fetchRestaurants());
    },

    methods: {
        fetchRestaurants() {
            axios.get('http://127.0.0.1:8000/api/restaurants')
                .then(res => {
                    const results = res.data.results
                    this.restaurants = results.data
                    console.log('restaurants', this.restaurants);
                    console.log('results', results.data);
                })
                .catch(err => {
                    console.log(err);
                })
        },

        typeSelection(index, type) {
            this.currentIndexType = index;
            this.currentType = type;

            // Aggiungi o rimuovi il 'type' dall'array selectedTypes in base alla sua selezione
            const selectedIndex = this.selectedTypes.indexOf(type);
            if (selectedIndex > -1) {
                this.selectedTypes.splice(selectedIndex, 1);
            } else {
                this.selectedTypes.push(type);
            }
        },
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

        // restaurants carusel
        previousPageRestaurant() {
            if (this.currentPageRestaurant > 1) {
                this.currentPageRestaurant--;                
            }
            else if(this.currentPageRestaurant === 1){
                this.currentPageRestaurant = this.totalPagesRestaurant
            }
            
        },
        nextPageRestaurant() {
            if (this.currentPageRestaurant < this.totalPagesRestaurant) {
                this.currentPageRestaurant++;
            }
            else if(this.currentPageRestaurant === this.totalPagesRestaurant){
                this.currentPageRestaurant = 1
            }
        },
        currentTypeRest() {
            const rest = [];
            if (this.selectedTypes.length === 0) {
                return this.restaurants;
            }

            for (let j = 0; j < this.restaurants.length; j++) {
                const typeName = this.restaurants[j].types;
                let hasAllSelectedTypes = true;

                for (let x = 0; x < this.selectedTypes.length; x++) {
                    const selectedType = this.selectedTypes[x];
                    let typeIncluded = false;

                    for (let i = 0; i < typeName.length; i++) {
                        if (typeName[i].name.includes(selectedType)) {
                            typeIncluded = true;
                            break;
                        }
                    }

                    if (!typeIncluded) {
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
    height: auto;
    max-height: 400px;
    padding-bottom: 18px;

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
            width: 150px;
            position: absolute;
            left: 150px;
            bottom: 50px;
            transform: rotate(350deg);

        }
    }


    .btn {
        margin-bottom: 40px;
    }
}

.restaurant-type {
    margin: 0;
    flex-wrap: nowrap;
    flex-shrink: 1;
    height: auto;
    background-color: rgba(214, 24, 24, 1);

    .aside {
        // background-color: rgb(240, 3, 3);
        background: rgb(139, 0, 0);
        // background: linear-gradient(270deg, rgba(214, 24, 24, 1) 0%, rgba(107, 0, 0, 1) 100%);
        // min-height: 200px;
        margin: 0;
        display: flex;
        justify-content: center;
        border-radius: 0 200px 200px 0;
        padding: 40px;


        .aside_type {
            padding: 50px 0;
            margin: 0;
            height: 100%;
            text-align: center;
            display: flex;
            justify-content: center !important;
            align-items: center;
            flex-wrap: wrap;

            .font-awesome-icon {
                background-color: rgb(215, 6, 6);
                border-radius: 20px;
                box-shadow: 0px 0px 10px 10px rgb(215, 6, 6);
                padding: 10px;
                display: flex;
                justify-content: center;
                margin: 20px;
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
                padding: 20px;
                margin: 20px;

                img {
                    width: 200px;
                    // max-width: 60%;
                }
            }

            .active {
                background-color: rgb(214, 24, 24);
                border-radius: 20px;
                box-shadow: 10px 10px 5px rgb(214, 24, 24),
                    -10px -10px 5px rgb(214, 24, 24),
                    10px -10px 5px rgb(214, 24, 24),
                    -10px 10px 5px rgb(214, 24, 24);
                text-decoration-color: white;
                transition: transform 0.3s ease;
                transition: text-shadow 0.3s ease;
                text-shadow: 0 0 5px white;
                font-weight: 600;
                padding: 0;
                color: white;
                margin: 60px;


                img {
                    max-width: 50%;
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
            .navigation {
                margin-bottom: 150px;
                .pagination {
                    color: white;
                    font-size: 30px;
                    justify-content: center;
                    display: flex;
                    align-items: center;
                }
            }

            .restaurants_grid {
                align-items: center;

                .router {
                    text-decoration: none;
                    color: currentColor;

                    .restaurant-card {
                        background: rgb(223, 82, 82);
                        background: linear-gradient(180deg, rgba(223, 82, 82, 1) 41%, rgba(214, 24, 24, 1) 87%);
                        margin: 0 10px 80px 10px;
                        border-radius: 40px;
                        position: relative;
                        min-height: 400px;
                        max-height: 800px;
                        padding-top: 60px;


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
                            
                            position: absolute;
                            // top: -80px;
                            // left: 50%;
                            // transform: translateX(-50%);

                            // position: absolute;
  top: 0px;
  left: 50%;
  transform: translate(-50%, -50%);
//   max-width: 100%;
//   max-height: 100%;
//   width: auto;
//   height: auto;

                            img {
                                aspect-ratio: 1/1;
                                border-radius: 999px;
                                width: 80%;
                            }
                        }

                        .restaurant-info {
                            // margin-top: 60px;
                            padding-top: 20px;

                            .restaurant-title {
                                font-size: 28px;
                                color: white;
                            }
                            li {
                                background-color: rgb(214, 24, 24);
                                border-radius: 10px;
                                padding: 10px;
                            }
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
        flex-shrink: 0;
        height: auto;

        .aside {
            background: rgb(107, 0, 0);
            background: linear-gradient(180deg, rgba(107, 0, 0, 1) 55%, rgba(214, 24, 24, 1) 100%);
            margin: 0;
            display: flex;
            justify-content: center;
            width: 100%;
            border-radius: 200px 200px 0 0;

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
                    // box-shadow: 10px 10px 5px rgb(214, 24, 24),
                    // -10px -10px 5px rgb(214, 24, 24),
                    // 10px -10px 5px rgb(214, 24, 24),
                    // -10px 10px 5px rgb(214, 24, 24);
                    border-radius: 20px 20px 0 0;
                    box-shadow: none;
                    text-decoration-color: white;
                    transition: transform 0.3s ease;
                    transition: text-shadow 0.3s ease;
                    text-shadow: 0 0 5px white;
                    font-weight: 600;
                    color: white;
                    // margin: 0 5px;
                    padding: 10px;
                    margin: 20px 20px 50px 20px;
                    // // border: 1px solid black;


                    img {
                        -width: 100%;
                        
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
                .router {
                    .restaurant-card {
                        .restaurant-image {
                            top: 0px;
                            left: 50%;
                            transform: translateX(-50%);                          

                            position: relative;

                            img {
                                aspect-ratio: 1/1;
                                border-radius: 999px;
                                width: 100%;
                                position: absolute;
                                top: -50px;
                            }
                        }
                    }
                }

                .col-md-2 {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                   
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

@media screen and (max-width:480px) {
    .restaurant-type {
        flex-direction: column;
        margin: 0;
        flex-wrap: nowrap;
        flex-shrink: 0;
        height: auto;

        .aside {
            background: rgb(107, 0, 0);
            background: linear-gradient(180deg, rgba(107, 0, 0, 1) 55%, rgba(214, 24, 24, 1) 100%);
            margin: 0;
            display: flex;
            justify-content: center;
            width: 100%;
            border-radius: 200px 200px 0 0;

            .aside_type {
                gap: 38px;
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
                        max-width: 80%;
                    }
                }

                .active {
                    background-color: rgb(214, 24, 24);
                    // box-shadow: 10px 10px 5px rgb(214, 24, 24),
                    // -10px -10px 5px rgb(214, 24, 24),
                    // 10px -10px 5px rgb(214, 24, 24),
                    // -10px 10px 5px rgb(214, 24, 24);
                    border-radius: 20px 20px 0 0;
                    box-shadow: none;
                    text-decoration-color: white;
                    transition: transform 0.3s ease;
                    transition: text-shadow 0.3s ease;
                    text-shadow: 0 0 5px white;
                    font-weight: 600;
                    color: white;
                    // margin: 0 5px;
                    padding: 10px;
                    margin: 20px 20px 50px 20px;
                    // // border: 1px solid black;


                    img {
                        -width: 100%;
                        
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
                .router {
                    .restaurant-card {
                        .restaurant-image {
                            top: 0px;
                            left: 50%;
                            transform: translateX(-50%);                          

                            position: relative;

                            img {
                                aspect-ratio: 1/1;
                                border-radius: 999px;
                                width: 80%;
                                position: absolute;
                                top: -50px;
                            }
                        }
                    }
                }

                .col-md-2 {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                   
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