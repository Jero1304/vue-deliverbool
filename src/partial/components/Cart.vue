
<script>
export default {
    data() {
        return {
            clientName: '',
            date: '',
            code: '',
            address: '',
            restaurantId: this.restaurantID,
            order: {},

            showConfirmButton: true,
        }
    },
    props: {
        cart: {
            type: Object,
            required: true,
        },
        restaurantID: {
            type: String,
            required: true,
        },
        // orderInfo: {
        //     type: Object, // o il tipo appropriato per l'oggetto order
        //     required: true,
        // },
    },
    mounted() {
        this.date = this.getCurrentDate();
        this.code = this.orderCode();
    },
    methods: {
        SelectedInfo() {
            if (!this.clientName || !this.address || this.cart.length === 0) {
                // Controlla se i campi "Nome cliente" e "Indirizzo" sono vuoti
                // Se uno dei due campi è vuoto, restituisci showConfirmButton: true
                this.showConfirmButton = true;
                return;
            }
            this.order = {
                client_name: this.clientName,
                date: this.date,
                code: this.code,
                address: this.address,
                restaurantId: this.restaurantId,
                order: this.cart,
                products_id: this.setProductsId(this.cart),
                total_price: this.totalPrice()
            };

            // Recupera l'oggetto order esistente dal localStorage
            const existingOrder = JSON.parse(localStorage.getItem('order')) || {};

            // Verifica se il restaurantID corrisponde all'oggetto order esistente
            // if (existingOrder.restaurantId === this.restaurantId) {
            // Salva l'oggetto order nel localStorage solo se il restaurantID corrisponde
            // }
            localStorage.setItem('order', JSON.stringify(this.order));

            console.log(this.order);
        },
        setProductsId(cart) {
            const productsId = [];
            cart.forEach(product => {
                productsId.push(product.plate.id);
            });
            return productsId;
        },
        getCurrentDate() {
            const now = new Date();
            const year = now.getFullYear();
            let month = now.getMonth() + 1;
            let day = now.getDate();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();

            // Aggiungi uno zero iniziale per i mesi, giorni, ore, minuti e secondi inferiori a 10
            if (month < 10) {
                month = `0${month}`;
            }
            if (day < 10) {
                day = `0${day}`;
            }
            if (hours < 10) {
                hours = `0${hours}`;
            }
            if (minutes < 10) {
                minutes = `0${minutes}`;
            }
            if (seconds < 10) {
                seconds = `0${seconds}`;
            }

            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        },

        orderCode() {
            const characters = 'abcdefghijklmnopqrstuvwxyz';
            let code = this.restaurantID + '-';

            for (let i = 0; i < 4; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                code += characters.charAt(randomIndex);
            }

            return code;
        },

        hideConfirmButton() {
            this.showConfirmButton = false;
        },
        showPaymentButton() {
            this.showConfirmButton = true;
        },

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
            <h2 class="text-center pb-5 title" style="color:rgb(255, 102, 0);">il tuo Carrello</h2>
            <div class="row">
                <h4 class="d-flex justify-content-center pb-5">Inserisci i tuoi dati!</h4>
                
                <form class="d-flex align-items-center justify-content-center gap-5 pb-5">
                    <div class="form-group w-25">
                        <label for="clientName">Nome cliente</label>
                        <input required type="text" class="form-control" id="clientName" v-model="clientName" maxlength="50" pattern="[A-Za-z\s]{1,50}">
                        <small class="text-danger" v-if="clientName && !isClientNameValid">Es. Giulia Bianchi</small>
                    </div>
                    <div class="form-group w-50">
                        <label for="address">Indirizzo</label>
                        <input required type="text" class="form-control" id="address" rows="3" v-model="address" maxlength="100" pattern="[A-Za-z0-9\s]{1,100}">
                        <small class="text-danger" v-if="address && !isAddressValid">Es. Via Roma 13</small>
                    </div>
                </form>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Piatto</th>
                        <th scope="col" style="padding-left: 44px;">Quantità</th>
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
                        <td><h3>Totale</h3></td>
                        <td style="padding-left: 54px;">pz. {{ totalQuantity() }}</td>
                        <td >€ {{ totalPrice() }}</td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>

            <div v-if="showConfirmButton" @click="hideConfirmButton(), SelectedInfo()"
                class="d-flex justify-content-center py-4">
                <button type="submit" class="btn cart-btn w-25 px-2">Conferma</button>
            </div>


            <div v-else @click="showPaymentButton()" class="d-flex justify-content-center py-4">
                <router-link :to="{ name: 'PaymentPage', props: { orderInfo: order } }">
                    <button type="submit" class="btn cart-btn w-100 px-2">Procedi con il pagamento</button>
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

    .form-group{
        small{
            position: absolute;
        }
    }
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

