<template>
    <div class="hero">
        <div class="hero-container">
            <div class="container bg-primary info">
                <h2>Ristorante</h2>
                <p>descrizione</p>
                <p>orari</p>
            </div>
        </div>
    </div>

    <div class="restaurant">

        <div class="container">
            <h1>Menu</h1>
        </div>

        <div class="container">
            <div class="row">
                <div class="aside">
                    <div class="aside-plate">

                        <div> sinistra</div>

                        <div class="aside-card">
                            <img src="../../../public/images/plate.webp" alt="">
                            <p>plate</p>
                        </div>

                        <div> destra</div>
                    </div>
                </div>

                <div class="plates">
                    piatti
                </div>
            </div>
        </div>

    </div>
</template>

<script>
const restaurantMenu = [
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

const plateType = [
    'primi',
    'secondi',
    'bevande',
    'vini',
    'dolci',
    'digestivi'

];
export default {

}


</script>

<style lang="scss" scoped>
.hero {
    .hero-container {
        height: 500px;
        width: 100%;
        background-image: url('https://picsum.photos/200/300');
        background-repeat: no-repeat;
        background-size: cover;
    }
}

.restaurant {
    background-color: red;
    height: 1000px;
    width: 100%;

    .aside {
        background-color: blue;
        margin: 0;
        display: flex;
        justify-content: center;
        width: 100%;
        height: auto;

        .aside-plate {
            padding: 10px 0;
            margin: 0;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            text-align: center;
            justify-content: end;

            .aside-card {
                color: rgb(187, 184, 184);
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                img {
                    max-width: 80px;
                }
            }
        }
    }
    .plates{
        background-color: green;
        height: 700px ;
    }

}
</style>