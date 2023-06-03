<template>
    <div class="form_card d-flex justify-content-center">
        <div class="form-cont col d-flex justify-content-center mb-5">
            <form @submit.prevent="submitPayment">
                <div class="billing-cont">
                    <div class="billing-cont-top">
                        <div class="order">
                            <!-- <ul class="order_item">
                                <li>
                                    <h4>
                                        Riepilogo ordine
                                    </h4>
                                </li>
                                <li>
                                    Pizza 1
                                </li>
                                <li>
                                    Pizza 2
                                </li>
                                <li>
                                    Acqua
                                </li>
                                <li>
                                    Tennent's
                                </li>
                                <li>
                                    <h4 class="total">
                                        Totale
                                    </h4>
                                </li>
                            </ul>
                            <ul class="order_money">
                                <li>
                                    7,50 &euro;
                                </li>
                                <li>
                                    12,80 &euro;
                                </li>
                                <li>
                                    1,90 &euro;
                                </li>
                                <li>
                                    2,70 &euro;
                                </li>
                                <li>
                                    <h4 class="total">
                                        24,90 &euro;
                                    </h4>
                                </li>
                            </ul> -->

                            <ul >
                                <li class="d-flex gap-3 justify-content-between align-items-center" v-for="(plate, index) in order.order">
                                    <p>
                                        {{ plate.quantity }} - {{ plate.plate.name }}
                                    </p>
                                    <p>
                                        &euro; {{ quantityPrice(plate.plate.price, plate.quantity) }}
                                    </p>
                                </li>

                                <li class="d-flex gap-3 justify-content-between align-items-center">
                                    <p>
                                        Totale
                                    </p>
                                    <p>
                                        &euro; {{ totalPrice() }}
                                    </p>
                                </li>
                            </ul>


                        </div>
                        <div class="form-group ">
                            <label for="card-number">Nome del proprietario</label>
                            <input type="text" class="form-control" id="card-name" v-model="cardName" required>
                        </div>
                        <div class="form-group ">
                            <label for="card-number">Numero di carta</label>
                            <input type="text" class="form-control" id="card-number" v-model="cardNumber" required>
                        </div>
                    </div>
                    <div class="billing-cont-bottom">
                        <div class="form-group">
                            <label for="card-number">(MM/YY)</label>
                            <input type="text" class="form-control" id="expiration-date" v-model="expirationDate" required>
                        </div>
                        <div class="form-group">
                            <label for="card-number">CVV</label>
                            <input type="text" class="form-control" id="cvv" v-model="cvv" required>
                        </div>
                    </div>
                    <button type="submit" class="pay_btn btn btn-primary ">Paga</button>
                </div>
            </form>
        </div>
    </div>
</template>
  
<script>
import { createBraintree, tokenizeCard } from 'braintree-web';

export default {
    data() {
        return {
            cardName: '',
            cardNumber: '',
            expirationDate: '',
            cvv: '',
            order: JSON.parse(localStorage.getItem('order')),
        };
    },
    // props: {
    //     orderInfo: {
    //         type: Object,
    //         required: true
    //     }
    // },
    mounted() {
        // Inizializza Braintree
        // createBraintree({
        //     authorization: 'YOUR_BRAINTREE_AUTHORIZATION_TOKEN'
        // }, (err, instance) => {
        //     if (err) {
        //         console.error(err);
        //         return;
        //     }

        //     this.braintreeInstance = instance;
        // });
        // const order = JSON.parse(localStorage.getItem('order'));
        console.log(this.order)
    },
    methods: {
        submitPayment() {
            // Tokenizza i dati della carta di credito utilizzando Braintree
            this.braintreeInstance.tokenizeCard({
                cardNumber: this.cardNumber,
                expirationDate: this.expirationDate,
                cvv: this.cvv
            }, (err, nonce) => {
                if (err) {
                    console.error(err);
                    return;
                }

                // Invia il nonce al server per elaborare il pagamento
                this.processPayment(nonce);
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
        }
    }
};
</script>
  
<style lang="scss">
@import '../src/scss/variables.scss';

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
</style>
  
