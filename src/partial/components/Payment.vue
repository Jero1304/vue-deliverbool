<template>
    <div class="form_card d-flex justify-content-center">

        <!-- Pulsante back to Home -->

        <button class="btn btn-primary mt-3 back-cart" @click="$router.push(`/menu/${order.restaurantId} `)">
            <img src="https://cdn.pixabay.com/photo/2021/07/22/00/43/back-6484174_1280.png" alt="go-back">
            Torna al carrello</button>

        <div class="form-cont col d-flex justify-content-center mb-5">
            <form @submit.prevent="submitPayment">
                <div class="billing-cont  w-75">
                    <div class="billing-cont-top">
                        <div class="order" :class="{'confirmed' : confirmedOrder === true}">
                            <div class="row">

                                <h2>Riepilogo</h2>

                                <ul class="d-flex justify-content-between flex-wrap">
                                    <li>
                                        <p>Nome: {{ order.client_name }}</p>
                                        <p>Indirizzo: {{ order.address }}</p>
                                    </li>
                                    <li>
                                        <p>Date: {{ order.date }}</p>
                                        <p>Codice: {{ order.code }}</p>
                                    </li>
                                </ul>

                                <ul>
                                    <li class="d-flex gap-3 justify-content-between align-items-center"
                                        v-for="(plate, index) in order.order">
                                        <p>
                                            {{ plate.quantity }} - {{ plate.plate.name }}
                                        </p>
                                        <p>
                                            &euro; {{ quantityPrice(plate.plate.price, plate.quantity) }}
                                        </p>
                                    </li>

                                    <li class="d-flex gap-3 justify-content-between align-items-center">
                                        <h4>
                                            Totale
                                        </h4>
                                        <p class="fw-bold">
                                            &euro; {{ totalPrice() }}
                                        </p>
                                    </li>
                                </ul>

                                <div v-if="confirmedOrder">
                                    <div class="confirm-message">
                                        {{ message }}!
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="container" v-if="confirmedOrder === false">
                            <div>
                                <div class="form-group ">
                                    <label for="card-number">Nome del proprietario</label>
                                    <input type="text" class="form-control" id="card-name" v-model="cardName"
                                        name="cardName" required pattern="[a-zA-Z\s]+"
                                        title="Inserisci un nome valido (solo lettere e spazi)">
                                </div>
                                <div class="form-group ">
                                    <label for="card-number">Numero di carta</label>
                                    <input type="text" class="form-control" id="card-number" v-model="cardNumber"
                                        name="cardNumber" required pattern="[0-9]{16}"
                                        title="Inserisci un numero di carta valido (16 cifre)">
                                </div>
                            </div>
                            <div class="billing-cont-bottom justify-content-center">
                                <div class="form-group">
                                    <label for="card-number">(MM/YY)</label>
                                    <input type="text" class="form-control" id="expiration-date" v-model="expirationDate"
                                        name="expirationDate" required pattern="^[0-9\/\\]+$"
                                        title="Inserisci una data valida (MM/YY)">
                                </div>
                                <div class="form-group">
                                    <label for="card-number">CVV</label>
                                    <input type="text" class="form-control" id="cvv" v-model="cvv" name="cvv" required
                                        pattern="[0-9]{3}" title="Inserisci un CVV valido (3 cifre)">
                                </div>
                            </div>
                            <button type="submit" class="pay_btn btn btn-primary ">Paga</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    data() {
        return {
            cardName: '',
            cardNumber: '',
            expirationDate: '',
            cvv: '',
            order: JSON.parse(localStorage.getItem('order')),
            confirmedOrder: false,
            message: '',
        };
    },

    mounted() {
        console.log(this.order)
    },
    methods: {
        submitPayment() {
            const data = {
                order: this.order
            };
            axios.post('http://127.0.0.1:8000/api/orders', data)
                .then(response => {
                    console.log(response.data);
                    this.confirmedOrder = response.data.success
                    this.message = response.data.response
                })
                .catch(error => {
                    console.error(error);
                    this.confirmedOrder = false
                });
        },

        quantityPrice(price, quantity) {
            let totalPrice = price * quantity
            return totalPrice.toFixed(2)
        },
        totalPrice() {
            let total = 0;
            for (let i = 0; i < this.order.order.length; i++) {
                const product = this.order.order[i];
                total += product.plate.price * product.quantity;
            }
            return total.toFixed(2);
        },


    }
};
</script>
  
<style lang="scss">
@import '../src/scss/variables.scss';

// BUTTON CART RULES
.back-cart {
    background-color: rgb(255, 91, 0);
    border: 1px solid rgb(255, 238, 99);
    text-transform: uppercase;
    width: 150px;
    height: 50px;
    font-size: 10px;
    position: absolute;
    left: 0;
}

.back-cart img {
    width: 20px;
}



.form_card {
    background-color: $yellow;
}

.form-group {
    margin-bottom: 15px;
}

.form-cont {
    padding: 25px;
}

.pay_btn {
    background-color: $orange;
    border: none;
    text-transform: uppercase;
}

.pay_btn:hover {
    background-color: $azur !important;
    box-shadow: 0 0 10px $azur;
}

.billing-cont {
    border: 1px solid black;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 10px 10px $orange;
}

.billing-cont-top {
    display: flex;
    flex-flow: column;
    gap: 15px;
}

.billing-cont-bottom {
    display: flex;
    gap: 15px;
}

.order {
    background-color: $orange;
    box-shadow: 5px 5px white;
    border-radius: 15px;
    padding: 10px;
    display: flex;
    gap: 15px;
}

.order_item {
    padding-left: 0 !important;
    display: flex;
    flex-flow: column;
    gap: 15px;
    margin-bottom: 0px !important;
}

.order_item li:first-child {
    border-bottom: 1px solid black;
}

.order_item li:last-child {
    border-top: 1px solid black;
}

.order_money {
    display: flex;
    flex-flow: column;
    align-self: center;
    gap: 15px;
    margin-top: 50px;
}

.total {
    margin-bottom: -10px
}
.confirm-message{
    color: white;
    font-size: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.confirmed{
    background-color: rgb(98, 160, 4);
}
</style>
  
