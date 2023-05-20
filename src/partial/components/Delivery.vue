<template>

    <div class="sezione-consegna">

       <h2 class="pt-5">Deliveboo consegna a casa tua!</h2>

       <!-- inizio struttura tre card -->


       
       <div class="sezione-card col-12">

               <!-- prima card -->

               <div class="card" style="width: 18rem;" id="card1">
                       <img class="card-img-top" src="https://www.exportiamo.it/thumb/1200x800/public/settori/379/street-food1.jpg" alt="Card image cap">
                   <div class="card-body">
                       <h5 class="card-title text-uppercase">Food street irresistibile!</h5>
                       <p class="card-text">Scopri una vasta selezione di cibi di strada provenienti da tutto il mondo, dai deliziosi panini ai gustosi falafel. Goditi il sapore autentico e l'atmosfera unica dello street food comodamente a casa tua.</p>
                   </div>
               </div>

               

               <!-- seconda card -->

               <div class="card" style="width: 18rem;" id="card2">
                       <img class="card-img-top" src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VzaGl8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Card image cap">
                   <div class="card-body">
                       <h5 class="card-title text-uppercase">Cucina orientale ricercata!</h5>
                       <p class="card-text">Esplora i sapori esotici dell'Oriente con la nostra selezione di piatti della cucina asiatica e orientale. Dai sushi giapponesi alle spezie piccanti della cucina thailandese, lasciati trasportare in un viaggio culinario emozionante.</p>
                       
                   </div>
               </div>

               <!-- terza card -->

               <div class="card" style="width: 18rem;" id="card3">
                       <img class="card-img-top" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="Card image cap">
                   <div class="card-body">
                       <h5 class="card-title text-uppercase">Pizza: orgoglio italiano!</h5>
                       <p class="card-text">Ordina la pizza perfetta che stavi desiderando da tanto tempo. Dai classici come la Margherita ai gusti più audaci, la nostra selezione di pizze ti farà scoprire un mondo di sapore.</p>
                       
                   </div>
               </div>

           </div> 

           <!-- Call to action -->

           <button type="button" class="btn btn-secondary btn-sm text-uppercase">Ordina ora ed esplora i locali intorno a te!</button>

   </div> 


   <!-- Sezione form-consegna -->

   <div class="form-consegna">

    <div class="row mt-3 mx-3" style="margin-top:25px ;">

        <div class="col-md-3">
            <div style="margin-top: 50px; margin-left: 10px;" class="text-center">
            <i id="animationDemo" data-mdb-animation="slide-right" data-mdb-toggle="animation"
                data-mdb-animation-reset="true" data-mdb-animation-start="onScroll"
                data-mdb-animation-on-scroll="repeat" class="fas fa-3x fa-shipping-fast text-white"></i>
            <h3 class="mt-3 text-white">Welcome</h3>
            <p class="white-text">You are 30 seconds away from compleating your order!</p>
            </div>
            <div class="text-center">
            <button type="submit" class="btn btn-white btn-rounded back-button">Go back</button>
            </div>


        </div>
        <div class="col-md-9 justify-content-center">
            <div class="card card-custom pb-4">
            <div class="card-body mt-0 mx-5">
                <div class="text-center mb-3 pb-2 mt-3">
                <h4 style="color: #495057 ;">Delivery Details</h4>
                </div>

                <form class="mb-0">

                <div class="row mb-4">
                    <div class="col">
                    <div class="form-outline">
                        <input type="text" id="form9Example1" class="form-control input-custom" />
                        <label class="form-label" for="form9Example1">First name</label>
                    </div>
                    </div>
                    <div class="col">
                    <div class="form-outline">
                        <input type="text" id="form9Example2" class="form-control input-custom" />
                        <label class="form-label" for="form9Example2">Last name</label>
                    </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                    <div class="form-outline">
                        <input type="text" id="form9Example3" class="form-control input-custom" />
                        <label class="form-label" for="form9Example3">City</label>
                    </div>
                    </div>
                    <div class="col">
                    <div class="form-outline">
                        <input type="text" id="form9Example4" class="form-control input-custom" />
                        <label class="form-label" for="form9Example4">Address</label>
                    </div>
                    </div>
                </div>

                <div class="float-end ">
                    <!-- Submit button -->
                    <button type="submit" class="btn btn-primary btn-rounded"
                    style="background-color: #0062CC ;">Place order</button>
                </div>

                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
     

</template>

<script>
export default {

}
</script>

<style scoped>
/* SEZIONE CONSEGNA RULES */
.sezione-consegna {
   text-align: center;
   background-color: rgb(255, 204, 29);
   padding-bottom: 20px;

}

/* CARD RULES */
.sezione-card{
   display: flex;
   justify-content: center;
   gap: 30px;
   padding: 50px 50px 50px 50px;
} 

 p{
   font-size: 12px;
   text-align: center;
   margin: 10px;
}

h2{
   color:rgb(255, 91, 0); 
   font-size: 40px;
   text-transform: uppercase;
}

h5{
   color:rgb(255, 91, 0); 
   font-size: 17px;
   font-weight: bold;
}

.card-img-top{
    border-radius: 80%;
}

.card{
    background-color:rgb(255, 204, 29);
    border: 1px solid rgb(255, 204, 29);
}

/* BUTTON RULES */

.btn{
   padding: 20px;
   border-radius: 50px;
   border: 1px solid rgb(255, 91, 0);;
   font-size: 18px;
   margin-bottom: 10px;
   background-color: rgb(255, 91, 0);
}

.btn:hover{
   background-color:rgb(2, 214, 196);; 
   border: 1px solid rgb(2, 214, 196);;
   cursor:pointer;
   box-shadow: 0 0 10px rgb(2, 214, 196);;
} 



/* RESPONSIVE STYLES */
@media (max-width: 450px) {
   /* CARD RULES */
   .sezione-card {
      flex-wrap: wrap;
   }
   
   .card {
      width: 100%;
      margin-bottom: 20px;
   }
   
   /* BUTTON RULES */
   .btn {
      padding: 15px;
      font-size: 16px;
   }
}

</style>