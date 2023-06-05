<template>
    <div class="form_card d-flex justify-content-center">
        <div class="form-cont col d-flex justify-content-center mb-5">
            <form @submit.prevent="submitPayment">
                <div class="billing-cont  w-75">
                    <div class="billing-cont-top">
                        <div class="order">
                            <div class="row">

                                <h2>Riepilogo</h2>

                                <!-- <div class="info"> -->
                                <ul class="d-flex justify-content-between flex-wrap">
                                    <li>
                                        <p>Nome: {{ order.clientName }}</p>
                                        <p>Indirizzo: {{ order.address }}</p>
                                    </li>
                                    <li>
                                        <p>Date: {{ order.date }}</p>
                                        <p>Codice: {{ order.code }}</p>
                                    </li>
                                </ul>

                                <!-- </div> -->

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

                            </div>


                        </div>
                        <div class="form-group ">
                            <label for="card-number">Nome del proprietario</label>
                            <input type="text" class="form-control" id="card-name" v-model="cardName" name="cardName"
                                required>
                            <div class="error-message">{{ errors.cardName }}</div>
                        </div>
                        <div class="form-group ">
                            <label for="card-number">Numero di carta</label>
                            <input type="text" class="form-control" id="card-number" v-model="cardNumber" name="cardNumber"
                                required>
                        </div>
                    </div>
                    <div class="billing-cont-bottom justify-content-center">
                        <div class="form-group">
                            <label for="card-number">(MM/YY)</label>
                            <input type="text" class="form-control" id="expiration-date" v-model="expirationDate"
                                name="expirationDate" required>
                            <div class="error-message">{{ errors.cardNumber }}</div>
                        </div>
                        <div class="form-group">
                            <label for="card-number">CVV</label>
                            <input type="text" class="form-control" id="cvv" v-model="cvv" name="cvv" required>
                        </div>
                        <div class="error-message">{{ errors.cvv }}</div>
                    </div>
                    <button type="submit" class="pay_btn btn btn-primary ">Paga</button>
                </div>
            </form>
        </div>
    </div>
</template>
  
<script>
import { createBraintree, tokenizeCard } from 'braintree-web';
import axios from 'axios';
export default {
    data() {
        return {
            cardName: '',
            cardNumber: '',
            expirationDate: '',
            cvv: '',
            order: JSON.parse(localStorage.getItem('order')),
            errors: {
                cardNumber: '',
                cardName: '',
                cvv: ''
            }
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
            if (this.validateForm()) {
                // Tokenizza i dati della carta di credito utilizzando Braintree
                // this.braintreeInstance.tokenizeCard({
                //     cardNumber: this.cardNumber,
                //     expirationDate: this.expirationDate,
                //     cvv: this.cvv
                // }, (err, nonce) => {
                //     if (err) {
                //         console.error(err);
                //         return;
                //     }

                //     // Invia il nonce al server per elaborare il pagamento
                //     this.processPayment(nonce);
                // });

                const data = {
                    order: this.order
                };
                axios.post('http://127.0.0.1:8000/api/orders', data)
                    .then(response => {
                        console.log(response.data);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        },
        validateForm() {
            this.errors.cardNumber = '';
            this.errors.cardName = '';
            this.errors.cvv = '';

            let isValid = true;

            // Validazione numero di carta
            if (!/^\d{16}$/.test(this.cardNumber)) {
                this.errors.cardNumber = 'Il numero di carta deve essere composto da 16 cifre.';
                isValid = false;
            }

            // Validazione nome del titolare della carta
            if (!/^[a-zA-Z\s]+$/.test(this.cardName)) {
                this.errors.cardName = 'Il nome del titolare della carta non deve contenere numeri o caratteri speciali.';
                isValid = false;
            }

            // Validazione CVV
            if (!/^\d{3}$/.test(this.cvv)) {
                this.errors.cvv = 'Il CVV deve essere composto da 3 cifre.';
                isValid = false;
            }

            return isValid;
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
  
