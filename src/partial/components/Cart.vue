
<script>
export default{
    data(){
        return{

        }
    }
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
                    <tr>
                        <td>Pizza margherita</td>
                        <td>1</td>
                        <td>€7.50</td>
                        <td  class="d-flex justify-content-end">
                            <a class="btn btn-danger btn-sm" href="">Rimuovi dal carrello</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Tagliata con patate</td>
                        <td>1</td>
                        <td>€15.00</td>
                        <td class="d-flex justify-content-end">
                            <a class="btn btn-danger btn-sm" href="">Rimuovi dal carrello</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Pokè media</td>
                        <td>1</td>
                        <td>€12.20</td>
                        <td class="d-flex justify-content-end">
                            <a class="btn btn-danger btn-sm" href="">Rimuovi dal carrello</a>
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

.cart{
    background-color: #FCFCFB;
    padding: 50px 0;
    .container-table{
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        .title{
            text-transform: uppercase;
            font-weight: bold;
            padding-top: 30px;
        }
        .cart-btn{
            padding: 10px 0;
            width: 30%;
            text-transform: uppercase;
            background-color: $orange;
            color: white;
            font-weight: bold;
            &:hover{
                background-color: $yellow;
            }
        }
    }
}

</style>

