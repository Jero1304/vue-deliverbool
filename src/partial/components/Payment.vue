<template>
    <div class="form_card d-flex justify-content-center">
        <div class="form-cont col d-flex justify-content-center">
            <form @submit.prevent="submitPayment">
                <div class="form-group">
                    <input type="text" class="form-control" id="card-number" v-model="cardNumber"
                        placeholder="Numero di carta..." required>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="expiration-date" v-model="expirationDate"
                        placeholder="Data di scadenza (MM/YY)..." required>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="cvv" v-model="cvv" placeholder="CVV.." required>
                </div>
                <button type="submit" class="pay_btn btn btn-primary ">Paga</button>
            </form>
        </div>
    </div>
</template>
  
<script>
import { createBraintree, tokenizeCard } from 'braintree-web';

export default {
    data() {
        return {
            cardNumber: '',
            expirationDate: '',
            cvv: ''
        };
    },
    mounted() {
        // Inizializza Braintree
        createBraintree({
            authorization: 'YOUR_BRAINTREE_AUTHORIZATION_TOKEN'
        }, (err, instance) => {
            if (err) {
                console.error(err);
                return;
            }

            this.braintreeInstance = instance;
        });
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
        processPayment(nonce) {
            // Effettua una chiamata al server per elaborare il pagamento con Braintree nonce
            // Implementa la logica di comunicazione con il tuo backend
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
</style>
  
