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
   <div class="form-consegna d-flex">

    <div class="col-7">
        <h3>I tuoi piatti preferiti a casa tua!</h3>

        <div class="input-group mb-4">
            <h6>Inserisci il tuo indirizzo per scoprire i ristoranti intorno a te.</h6>
            <div class="form-outline col-10 d-flex">
                <input type="search" id="form1" class="form-control"/>
                <label class="form-label" for="form1"></label>
                <button>Cerca</button>
            </div>

        </div>

        <h7> <a href="#">Accedi</a> per scorprire i tuoi indirizzi recenti.</h7>
        
    </div>


    <div class="col-4">
     <img src="https://cdn.pixabay.com/photo/2016/05/30/14/10/delivery-guy-1424808_960_720.png" alt="Delivery">
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
   box-shadow: 0 0 10px rgb(117, 38, 4);
}

.btn:hover{
   background-color:rgb(2, 214, 196);; 
   border: 1px solid rgb(2, 214, 196);;
   cursor:pointer;
   box-shadow: 0 0 10px rgb(2, 214, 196);;
} 


/* form-consegna RULES */

.form-consegna{
padding: 50px;
   background-color: rgb(255, 204, 0); /* Colore arancione */
   background-image: linear-gradient(rgb(255, 204, 0), rgb(255, 123, 0)); /* Colore a metà tra arancione e giallo */
   padding-bottom: 20px;
}

.form-consegna h3{
   color:rgb(255, 85, 0); 
   font-size: 30px;
   text-transform: uppercase;
   margin-bottom: 30px;

}
.form-consegna button{
   border-radius: 10px;
   padding: 10px;
   border: 1px solid rgb(255, 91, 0);;
   font-size: 18px;
   background-color: rgb(255, 91, 0);
   color: white;
   box-shadow: 0 0 10px rgb(166, 52, 3);
}

.form-consegna button:hover{
   background-color:rgb(2, 214, 196);
   border: 1px solid rgb(2, 214, 196);
   cursor:pointer;
   box-shadow: 0 0 10px rgb(2, 214, 196);
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
      padding: 13px;
      font-size: 13px;
   }

   /* form-consegna RULES */
  .form-consegna {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-consegna h3 {
    font-size: 18px;
  }

  .form-consegna h6 {
    font-size: 13px;
  }

   h7 {
    font-size: 12px;
    margin-bottom: 20px;
  }

  .form-consegna button {
    padding: 8px;
    font-size: 16px;
  }

  .form-outline{
    width: 250px;
  }
}





</style>