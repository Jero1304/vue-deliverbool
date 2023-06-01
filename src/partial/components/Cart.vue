
<script>
export default {
    data() {
        return {

        }
    },
    props: {
        cart: {
            type: Object,
            required: true,
        }
    },
    methods: {
        quantityPrice(price, quantity) {
            // console.log('price',price);
            let totalPrice = price * quantity
            // console.log(totalPrice);
            return totalPrice.toFixed(2)
        },
        removeFromCart(index) {
            this.cart.splice(index, 1); // Rimuove l'elemento dal carrello
        },
        removeElement(product,index){
            if(product.quantity === 0){
                this.cart.splice(index, 1)
            }else{
                return product.quantity --
            }
            // console.log();

        },
        addElement(product){
            // console.log();
            return product.quantity ++
        },

    },
}
</script>


<template>
    <div class="cart">
        <div class="container container-table">
            <h2 class="text-center pb-5 title">il tuo Carrello</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Piatto</th>
                        <th scope="col">Quantità</th>
                        <th scope="col">Prezzo</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, index) in cart">
                        <!-- {{product.plate}} -->
                        <td>{{ product.plate.name }}</td>
                        
                        <td><span @click="removeElement(product,index)" class="btn btn-primary mx-3">-</span>{{ product.quantity }}<span @click="addElement(product)" class="btn btn-primary mx-3">+</span></td>
                       
                        <!-- <td>€{{product.plate.price}}</td> -->
                        <td>€ {{ quantityPrice(product.plate.price, product.quantity) }}</td>
                        
                        <td class="d-flex justify-content-end">
                            <a class="btn btn-danger btn-sm" @click="removeFromCart(index)">Rimuovi dal carrello</a>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="d-flex justify-content-center py-4">
                <a class="btn cart-btn" href="">Procedi con il pagamento</a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../src/scss/variables' as *;

.cart {
    background-color: #FCFCFB;
    padding: 50px 0;

    .container-table {
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

        .title {
            text-transform: uppercase;
            font-weight: bold;
            padding-top: 30px;
        }

        .cart-btn {
            padding: 10px 0;
            width: 30%;
            text-transform: uppercase;
            background-color: $orange;
            color: white;
            font-weight: bold;

            &:hover {
                background-color: $yellow;
            }
        }
    }
}
</style>

