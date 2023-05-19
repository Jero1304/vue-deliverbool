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
            ristorante
        </div>
    </div>
</template>

<script>
export default {
    name: 'name'

}
</script>

<style lang="scss" scoped>
.restaurant-type {
    flex-direction: row;
    margin: 0;
    flex-wrap: nowrap;
    flex-shrink: 1;

    .aside {
        background-color: red;
        min-height: 200px;
        margin: 0;

        .aside_type {
            padding: 0;
            margin: 0;
            height: 100%;
            display: flex;
            flex-direction: column;
            button{
                padding: 0;
                margin:auto;
            }
        }
    }

    .restaurants {
        background-color: blue;
        min-height: 200px;
        margin: 0;
    }
}
</style>