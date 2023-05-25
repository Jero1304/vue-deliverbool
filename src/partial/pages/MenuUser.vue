<template>
    <div class="hero">
        <div class="hero-container">
            <div class="container info">
                <h2>{Ristorante}</h2>
                <p>{Descrizione}Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores placeat et vel incidunt cum ex ullam quos neque doloribus a! Nemo quidem quaerat sequi magnam eum sapiente molestiae saepe cum.
                Ullam nisi doloribus necessitatibus vero labore sequi vel quis dicta voluptas, fuga modi ipsam. Perferendis enim molestias, reiciendis, incidunt velit tempora deserunt, fugiat doloremque nisi tenetur ad impedit accusamus dolore.
                Esse amet expedita laboriosam ipsam corporis, mollitia, perferendis eius atque enim necessitatibus saepe unde minus quae ex. Deserunt repellendus beatae incidunt et ipsam, quia perferendis atque nulla sed. Distinctio, dignissimos!
                Culpa voluptates veniam animi, illum veritatis dicta, nihil quia numquam, eius doloremque obcaecati ab quae odio magni ipsam cupiditate iure omnis soluta. Natus, sapiente nesciunt aut assumenda architecto cum velit.</p>
                <p>{Orari di apertura e chiusura}</p>

                <div class="container-img">
                <img src="https://cdn.pixabay.com/photo/2022/05/22/13/21/healthy-7213383_1280.jpg" alt="gourmet">
                <img src="https://cdn.pixabay.com/photo/2022/03/04/00/47/wine-7046276_1280.jpg" alt="gourmet">
                <img src="https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_1280.jpg" alt="pizza-gourmet">
                </div>


            </div>
        </div>
    </div>

    <div class="restaurant">

        <div class="container d-flex justify-content-center mt-4">
            <h1>Menu</h1>
        </div>

        <div class="container">
            <div class="row d-flex justify-content-center">
                <!-- <div class="aside">
                    <div class="aside-plate">

                        <div @click="previousPageType" :disabled="currentPageType === 1"> sinistra</div>

                        <div class="aside-card" v-for="(plateType, index) in paginateType"
                            @click="typeSelection(index, plateType), currentTypeRest(), pagesResest()">
                            <img src="../../../public/images/plate.webp" alt="food">
                            <p>{{ plateType }}</p>
                        </div>

                        <div @click="nextPageType" :disabled="currentPageType === totalPagesType"> destra</div>
                    </div>
                </div> -->

                <div class="plates p-3">
                    <div class="row">
                        <div class="col-1" @click="previousPagePlate" 
                            :disabled="currentPagePlate === 1">
                            <img src="https://cdn.pixabay.com/photo/2012/04/13/00/19/arrow-31203_1280.png" alt="freccia-destra">
                        </div>

                        <div class="row col-10 justify-content-center">
                            <template v-for="(plate, index) in paginatePlates" :key="index">
                                <div class="col-4 p-3" v-if="plate.type.includes(currentType)">
                                    <img src="../../../public/images/cibo.webp" alt="food">
                                    <p>{{ plate.name }}</p>
                                </div>
                            </template>
                        </div>

                        <div class="col-1" @click="nextPagePlate"
                            :disabled="currentPagePlate === totalPagesPlate">
                        <img src="https://cdn.pixabay.com/photo/2012/04/13/00/20/arrow-31212_1280.png" alt="freccia-destra">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
const restaurantMenu = [
    // PRIMI
    {
        name: 'primo#1',
        type: 'primi',
    },
    {
        name: 'primo#2',
        type: 'primi',
    },
    {
        name: 'primo#3',
        type: 'primi',
    },
    {
        name: 'primo#4',
        type: 'primi',
    },
    {
        name: 'primo#5',
        type: 'primi',
    },
    {
        name: 'primo#6',
        type: 'primi',
    },
    {
        name: 'primo#7',
        type: 'primi',
    },
    {
        name: 'primo#8',
        type: 'primi',
    },

    // SECONDI
    {
        name: 'secondo#1',
        type: 'secondi',
    },
    {
        name: 'secondo#2',
        type: 'secondi',
    },
    {
        name: 'secondo#3',
        type: 'secondi',
    },
    {
        name: 'secondo#4',
        type: 'secondi',
    },
    {
        name: 'secondo#5',
        type: 'secondi',
    },
    {
        name: 'secondo#6',
        type: 'secondi',
    },
    {
        name: 'secondo#7',
        type: 'secondi',
    },
    {
        name: 'secondo#8',
        type: 'secondi',
    },

    // BEVANDE
    {
        name: 'bevanda#1',
        type: 'bevande',
    },
    {
        name: 'bevanda#2',
        type: 'bevande',
    },
    {
        name: 'bevanda#3',
        type: 'bevande',
    },
    {
        name: 'bevanda#4',
        type: 'bevande',
    },
    {
        name: 'bevanda#5',
        type: 'bevande',
    },
    {
        name: 'bevanda#6',
        type: 'bevande',
    },
    {
        name: 'bevanda#7',
        type: 'bevande',
    },
    {
        name: 'bevanda#8',
        type: 'bevande',
    },

    // VINO
    {
        name: 'vino#1',
        type: 'vini',
    },
    {
        name: 'vino#2',
        type: 'vini',
    },
    {
        name: 'vino#3',
        type: 'vini',
    },
    {
        name: 'vino#4',
        type: 'vini',
    },
    {
        name: 'vino#5',
        type: 'vini',
    },
    {
        name: 'vino#6',
        type: 'vini',
    },
    {
        name: 'vino#7',
        type: 'vini',
    },
    {
        name: 'vino#8',
        type: 'vini',
    },

    // DOLCI
    {
        name: 'vino#1',
        type: 'dolci',
    },
    {
        name: 'vino#2',
        type: 'dolci',
    },
    {
        name: 'vino#3',
        type: 'dolci',
    },
    {
        name: 'vino#4',
        type: 'dolci',
    },
    {
        name: 'vino#5',
        type: 'dolci',
    },
    {
        name: 'vino#6',
        type: 'dolci',
    },
    {
        name: 'vino#7',
        type: 'dolci',
    },
    {
        name: 'vino#8',
        type: 'dolci',
    },

    // DIGESTIVI
    {
        name: 'digestivo#1',
        type: 'digestivi',
    },
    {
        name: 'digestivo#2',
        type: 'digestivi',
    },
    {
        name: 'digestivo#3',
        type: 'digestivi',
    },
    {
        name: 'digestivo#4',
        type: 'digestivi',
    },
    {
        name: 'digestivo#5',
        type: 'digestivi',
    },
    {
        name: 'digestivo#6',
        type: 'digestivi',
    },
    {
        name: 'digestivo#7',
        type: 'digestivi',
    },
    {
        name: 'digestivo#8',
        type: 'digestivi',
    },
];

const plateTypes = [
    'Seleziona',
    'primi',
    'secondi',
    'bevande',
    'vini',
    'dolci',
    'digestivi'
];
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
        }
    },
    methods: {
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
            for (const plate of this.plateMenu) {
                // console.log(this.currentType);
                if (plate.type.includes(this.currentType)) {
                    resMenu.push(plate)
                }
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
            return this.plateTypes.slice(start, end);
        },
        totalPagesType() {
            return Math.ceil(this.plateTypes.length / this.itemsPerPageType);
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
.hero {
    background-image: url('../components/img/pattern-hero.jpg');
    background-size: cover;
    padding: 20px;
    .hero-container {
        height: 500px;
        width: 100%;
        margin-bottom: 50px;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 20px;
        
    }

    .info{
        background-color: rgba(209, 228, 222, 0.579);
        text-align: center;
        padding-bottom: 50px;
        padding: 20px;
    }

    .container-img img {
        width: 200px;
        height: 200px;
        margin: 10px;
        border-radius: 10px;
    }
}

.restaurant {
    background-image: url('../components/img/menu-pattern.jpg');
    background-size: cover;
    height: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;

    // .aside {
    //     background-color: blue;
    //     margin: 0;
    //     display: flex;
    //     justify-content: center;
    //     width: 100%;
    //     height: auto;

    //     .aside-plate {
    //         padding: 10px 0;
    //         margin: 0;
    //         height: 100%;
    //         display: flex;
    //         flex-direction: row;
    //         align-items: center;
    //         text-align: center;
    //         justify-content: end;

    //         .aside-card {
    //             color: rgb(187, 184, 184);
    //             display: flex;
    //             justify-content: space-around;
    //             align-items: center;
    //             flex-direction: column;
    //             margin: 0 10px;

    //             img {
    //                 max-width: 80px;
    //             }
    //         }
    //     }
    // }

    .plates {
        background-color: rgba(0, 128, 0, 0.076);
        height: 600px;
        width: 700px;
        position: relative;
        top: 300px;
        right: -400px;
        color: white;
    }

}
</style>