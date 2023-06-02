
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
            let totalPrice = price * quantity
            return totalPrice.toFixed(2)
        },
        removeFromCart(index) {
            this.cart.splice(index, 1);
        },
        removeElement(product, index) {
            if (product.quantity === 1) {
                this.cart.splice(index, 1)
            } else {
                return product.quantity--
            }
        },
        addElement(product) {
            return product.quantity++
        },
        totalQuantity() {
            let total = 0

            for (let i = 0; i < this.cart.length; i++) {
                total = this.cart[i].quantity + total
            }
            return total
        },
        totalPrice() {
            let total = 0;
            for (let i = 0; i < this.cart.length; i++) {
                const product = this.cart[i];
                total += product.plate.price * product.quantity;
            }
            return total.toFixed(2);
        }

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

                        <td>
                            <span @click="removeElement(product, index)" class="btn btn-primary mx-3">-</span>
                            {{ product.quantity }}
                            <span @click="addElement(product)" class="btn btn-primary mx-3">+</span>
                        </td>

                        <!-- <td>€{{product.plate.price}}</td> -->
                        <td>€ {{ quantityPrice(product.plate.price, product.quantity) }}</td>

                        <td class="d-flex justify-content-end align-items-center remove-btn">
                            <a class="btn btn-danger btn-sm " @click="removeFromCart(index)">Rimuovi dal carrello</a>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <h3>Totale</h3>
                    </tr>
                    <tr>
                        <td></td>
                        <td>pz. {{ totalQuantity() }}</td>
                        <td>€ {{ totalPrice() }}</td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>

            <div class="d-flex justify-content-center py-4">
                <router-link :to="{ name: 'PaymentPage'}">
                    <a class="btn cart-btn w-100 px-2" href="">Procedi con il pagamento</a>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../src/scss/variables' as *;

.cart {
    background-color: #FCFCFB;
    padding: 50px 0;

    .remove-btn {
        height: 56px;
    }

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

