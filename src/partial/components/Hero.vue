<script>
export default{
    data(){
        return{
            slides: [
                {
                    title: 'Consegna rapida e affidabile, direttamente a casa tua!',
                    text: 'Goditi il tuo cibo preferito comodamente a casa tua con la nostra consegna rapida e affidabile.',
                    thumb: '/images/pizza-delivery2.png'
                },
                {
                    title: 'Scegli tra una vasta selezione di cucine internazionali!',
                    text: 'Assaggia sapori da tutto il mondo, dalla pizza italiana al sushi giapponese, tutto a portata di click.',
                    thumb: '/images/rice.png'
                },
                {
                    title: 'Assicuriamo qualità e sicurezza per ogni consegna.',
                    text: 'La tua sicurezza è fondamentale per noi. Lavoriamo solo con ristoranti e fornitori che rispettano rigidi standard di igiene.',
                    thumb: '/images/security (2).png'
                },
            ],

            slideIndex: 0,
            autoPlayId: null,
        };
    },
    
    mounted(){
         this.setAutoPlay()
    },

    methods: {
        setAutoPlay(){
            this.autoPlayId = setInterval(this.nextSlide, 7000)
        },

        resetAutoPlay(){
            clearInterval(this.autoPlayId)
            this.setAutoPlay()
        },

        nextSlide(){
            this.slideIndex++
            if(this.slideIndex === this.slides.length){
                this.slideIndex = 0
            }
            this.resetAutoPlay()
        },

        prevSlide(){
            this.slideIndex--
            if(this.slideIndex < 0){
                this.slideIndex = this.slides.length - 1
            }
            this.resetAutoPlay()
        },
    },

}
</script>


<template>
    <div class="hero">
        <div class="container">
            <div class="hero_container" :class="slideIndex === index ? 'active' : ''" v-for="(el, index) in slides">
                <div class="hero_description">
                    <h1 class="title">{{ el.title }}</h1>
                    <p class="description">{{ el.text }}</p>    
                </div>
                <figure>
                    <img :src="el.thumb" alt="" class="thumb">
                </figure>
            </div>
        </div>
        <div @click="nextSlide" class="arrow arrow-right"><font-awesome-icon :icon="['fas', 'chevron-right']" /></div>
        <div @click="prevSlide" class="arrow arrow-left"><font-awesome-icon :icon="['fas', 'chevron-left']" /></div>
        
    </div>
    
</template>


<style lang="scss"  scoped>
@use '../src/scss/variables' as *;

    .hero{
        position: relative;
        padding: 300px 0;
        background-image: linear-gradient(to bottom right, $bordeaux, $orange, $yellow);

        .arrow{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            color: white;
            font-size: 25px;
            background-color: rgba($color: #000000, $alpha: 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 12px;
        }
        .arrow-right{     
            right: 0px;
        }

        .arrow-left{
            left: 0px;
        }
    };

    .hero_container{
        align-items: center;
        justify-content: center;
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        gap: 60px;

        .hero_description{
            flex-basis: 35%;

            .title{
                font-size: 60px;
                color:white;
                font-weight: bold;
                margin-bottom: 30px;
                animation-name: title;
                animation-duration: 1s;

                @keyframes title {
                    0% {
                        opacity: 0;
                        transform: translateX(-10%);
                    }
                    100% {
                        opacity: 1;
                    }
                }

            };

            .description{
                font-size: 30px;
                color: white;
                animation-name: description;
                animation-duration: 1s;

                @keyframes description {
                    0% {
                        opacity: 0;
                        transform: translateY(30%);
                    }
                    100% {
                        opacity: 1;
                    }
                }
            }
        }

        .thumb {
            width: 400px;
            animation-name: thumb;
            animation-duration: 2s;

                @keyframes thumb {
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }
        };

    };
    
    .active{
        display: flex;
    };

 
</style>