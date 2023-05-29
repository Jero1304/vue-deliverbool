<script>
export default{
    data(){
        return{
            slides: [
                {
                    title: 'Consegna rapida e affidabile, direttamente a casa tua!',
                    text: 'Goditi il tuo cibo preferito comodamente a casa tua con la nostra consegna rapida e affidabile.',
                    thumb: '/images/space.png'
                },
                {
                    title: 'Scegli tra una vasta selezione di cucine internazionali!',
                    text: 'Assaggia sapori da tutto il mondo, dalla pizza italiana al sushi giapponese, tutto a portata di click.',
                    thumb: '/images/curry.png'
                },
                {
                    title: 'Assicuriamo qualità e sicurezza per ogni consegna.',
                    text: 'La tua sicurezza è fondamentale per noi. Lavoriamo solo con ristoranti e fornitori che rispettano rigidi standard di igiene.',
                    thumb: 'immagine2'
                },
            ]
        };
    }
}
</script>


<template>
    <div class="hero">
        <div class="container">
            <div class="hero_description d-flex" v-for="el in slides">
                <div>
                    <p>{{ el.title }}</p>
                    <p>{{ el.text }}</p>    
                </div>
                <figure>
                    <img :src="el.thumb" alt="">
                </figure>
            </div>
        </div>
    </div>
    
</template>


<style>

</style>