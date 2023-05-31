<template>
    {{ restaurantID }}
    <div class="restaurant">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-6 description">
                    <h2>{Ristorante}</h2>
                    <p>{Descrizione}Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores placeat et vel
                        incidunt cum ex ullam quos neque doloribus a! Nemo quidem quaerat sequi magnam eum sapiente
                        molestiae saepe cum. Ullam nisi doloribus necessitatibus vero labore sequi vel quis dicta voluptas,
                        fuga modi ipsam. Perferendis enim molestias, reiciendis, incidunt velit tempora deserunt, fugiat
                        doloremque nisi tenetur ad impedit accusamus dolore. Esse amet expedita laboriosam ipsam corporis,
                        mollitia, perferendis eius atque enim necessitatibus saepe unde minus quae ex. Deserunt repellendus
                        beatae incidunt et ipsam, quia perferendis atque nulla sed. Distinctio, dignissimos! Culpa
                        voluptates veniam animi, illum veritatis dicta, nihil quia numquam, eius doloremque obcaecati ab
                        quae odio magni ipsam cupiditate iure omnis soluta. Natus, sapiente nesciunt aut assumenda
                        architecto cum velit.</p>
                    <p>{Orari di apertura e chiusura}</p>
                </div>



                <div class="plates p-3 col-6">
                    <div class="row p-1">
                        <div class="col-1 arrow sx" @click="previousPagePlate" :disabled="currentPagePlate === 1">
                            <img src="https://cdn.pixabay.com/photo/2012/04/13/00/19/arrow-31203_1280.png"
                                alt="freccia-destra">
                        </div>

                        <div class="row col-10 justify-content-center p-2">
                            <h2 class="title-responsive">Sfoglia il nostro menù!</h2>
                            <template v-for="(plate, index) in paginatePlates" :key="index">
                                <div class="col-3 p-3" v-if="plate.type.includes(currentType)">
                                    <img src="../../../public/images/cibo.webp" alt="food">
                                    <p>{{ plate.name }}</p>
                                </div>
                            </template>
                        </div>

                        <div class="col-1 arrow dx" @click="nextPagePlate" :disabled="currentPagePlate === totalPagesPlate">
                            <img src="https://cdn.pixabay.com/photo/2012/04/13/00/20/arrow-31212_1280.png"
                                alt="freccia-destra">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

import axios from 'axios'
export default {
    data() {
        return {
            plateMenu: restaurantMenu,
            plateTypes: plateTypes,

            currentIndexType: 0,
            currentType: '',

            currentPageType: 1,
            itemsPerPageType: 6,

            currentPagePlate: 1,
            itemsPerPagePlate: 6,

            restaurantID: this.$route.params.id,
            plates:[],
        }
    },
    created(){
        console.log(this.fetchPost());
    },

    methods: {

        fetchPost() {
            axios.get(`http://127.0.0.1:8000/api/restaurants/${this.restaurantID}`) 
                .then(res => {
                    
                    this.plates = res.data.restaurant.products
                    console.log(this.plates);


                })
                .catch(err => {
                    console.log(err)
                    // this.$router.replace({ name: '404' })
                })
        },




        typeSelection(index, type) {
            this.currentIndexType = index
            this.currentType = type
        },
        //type carusell
        previousPageType() {
            if (this.currentPageType > 1) {
                this.currentPageType--;
            }
            // console.log(this.currentPageType);
        },
        nextPageType() {
            if (this.currentPageType < this.totalPagesType) {
                this.currentPageType++;
            }
            // console.log(this.currentPageType);
        },

        previousPagePlate() {
            if (this.currentPagePlate > 1) {
                this.currentPagePlate--;
            }
        },
        nextPagePlate() {
            if (this.currentPagePlate < this.totalPagesPlate) {
                this.currentPagePlate++;
            }
        },

        currentTypeRest() {
            const resMenu = []
            for (const plate of this.plates) {
                // console.log(this.currentType);
                
            }
            // console.log('resMenu',resMenu);
            return resMenu
        },

        pagesResest() {
            this.currentPagePlate = 1
        },
    },

    computed: {
        paginateType() {
            const start = (this.currentPageType - 1) * this.itemsPerPageType;
            const end = start + this.itemsPerPageType;
            return this.plates.slice(start, end);
        },
        totalPagesType() {
            return Math.ceil(this.plates.length / this.itemsPerPageType);
        },

        paginatePlates() {
            const start = (this.currentPagePlate - 1) * this.itemsPerPagePlate;
            const end = start + this.itemsPerPagePlate;
            return this.currentTypeRest().slice(start, end);
        },
        totalPagesPlate() {
            return Math.ceil(this.currentTypeRest().length / this.itemsPerPagePlate);
        },
    }

}


</script>

<style lang="scss" scoped>
.description {
    background-color: rgba(255, 255, 255, 0.303);
    text-align: center;
    padding: 15px;
    width: 400px;
    margin-top: 200px;
    border-radius: 10px;
    color: rgb(0, 0, 0);
}



.restaurant {
    background-image: url('../components/img/menu-pattern.jpg');
    background-size: cover;
    height: auto;
    padding-bottom: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;

    .col-3.p-3:hover {
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

    .restaurant {
        background-image: url(../components/img/pettern-hero-responsive.jpg);




    }

    .plates {
        margin-top: -400px;
        margin-right: 375px;
        margin-bottom: 100px;

    }

    .plates .row {
        background-color: rgb(255, 202, 29);
        border-radius: 50px;

    }



    .arrow {
        width: 40px;
        height: 30px;
        margin-top: 100px;
        background-color: rgba(255, 89, 0, 0.681);
    }

    .sx {
        position: relative;
        right: -130px;
        margin-bottom: 150px;

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


// RESPONSIVE TABLET

@media (max-width: 1355px) {
    .description {
        width: 80%;
        margin-bottom: 20px;
        background-color: rgba(255, 89, 0, 0.8);
        color: white;
    }

    .restaurant {
        background-image: url(../components/img/pettern-hero-responsive.jpg);
        height: 1000px;
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

    }



    .arrow {
        width: 40px;
        height: 30px;
        margin-top: 100px;
        background-color: rgba(255, 89, 0, 0.681);
    }

    .sx {
        position: relative;
        right: -130px;
        margin-bottom: 150px;

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