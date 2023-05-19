<template>
    <div class="restaurant-type row">

        <div class="aside col-1">
            <div class="aside_type">
                <button>Pizza</button>
                <button>Pizza</button>
                <button>Pizza</button>
                <button>Pizza</button>                
            </div>
        </div>

        <div class="restaurants col-11">
            <div class="container">
                <div class="row">
                    <div class="col-3" v-for="(restaurant,index) in restaurants">
                        <img src="https://picsum.photos/200/300" alt="">
                        {{ restaurant.name }} <br>
                        {{ restaurant.type }}
                    </div>
                    
                    
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const restaurants=[
    {
        name:'Da Dario',
        type:'pizzeria'
    },
    {
        name:'Da Luigi',
        type:'italiano'
    },
    {
        name:'Genki Sushi',
        type:'sushi'
    },
    {
        name:'Hola Hola',
        type:'messicano'
    },
    {
        name:'Pizza a Pezzi',
        type:'pizzeria'
    },
    {
        name:'Dalla nonna',
        type:'italiano'
    },
    {
        name:'Chico',
        type:'messicano'
    },
    {
        name:'Ghoan',
        type:'sushi'
    },
]



export default {
    data() {
        return {
            restaurants:restaurants,
        }
    },
    methods: {
        
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
        .col-3{
            border: 1px solid red;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding-bottom: 20px;
            img{
                width: 100px;
                height: 100px;
                border-radius: 999px;
                margin: 20px 0;
            }

        }
    }
}
</style>