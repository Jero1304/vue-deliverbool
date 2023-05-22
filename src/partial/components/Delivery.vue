<template>

    <div class="sezione-consegna">

       <h2 class="pt-5">Deliveboo consegna a casa tua!</h2>

       <!-- inizio struttura tre card -->


       
       <div class="sezione-card col-12 mb-5 pb-5">

               <!-- prima card -->

               <!-- card hover -->
               <div class="card" :class="{ 'card-hover': hoveredCard === 'card1' }" style="width: 18rem;" id="card1" @mouseover="hoveredCard = 'card1'"  @mouseout="hoveredCard = null">
                
                <img class="card-img-top" src="https://cdn.pixabay.com/photo/2013/07/13/09/37/cheeseburger-155804_960_720.png">
                   
                <!-- IMG HOVER  -->

                <img class="img-hover" src="https://cdn.pixabay.com/photo/2017/09/18/16/53/burger-2762371_960_720.jpg" alt="Street Food">
                
                <div class="card-body">
                       <h5 class="card-title text-uppercase mt-4">Food street irresistibile!</h5>
                       <p>Scopri una vasta selezione di cibi di strada provenienti da tutto il mondo, dai deliziosi panini ai gustosi falafel. Goditi il sapore autentico e l'atmosfera unica dello street food comodamente a casa tua.</p>
                       
                   </div>
                </div>

               

               <!-- seconda card -->


               <div class="card" :class="{ 'card-hover': hoveredCard === 'card2' }" style="width: 18rem;" id="card2" @mouseover="hoveredCard = 'card2'"  @mouseout="hoveredCard = null">
                    
                    
                            <img class="card-img-top mt-5 pt-2" src="https://cdn.pixabay.com/photo/2013/07/12/19/18/sushi-154528_960_720.png" alt="Cucina orientale">
                            
                             <!-- IMG HOVER  -->

                             <img class="img-hover" src="https://cdn.pixabay.com/photo/2020/04/04/15/07/sushi-5002639_960_720.jpg" alt="Street Food">
                            
                            
                            <div class="card-body">
                                <h5 class="card-title text-uppercase">Cucina orientale ricercata!</h5>
                                <p class="card-text">Esplora i sapori esotici dell'Oriente con la nostra selezione di piatti della cucina asiatica e orientale. Dai sushi giapponesi alle spezie piccanti della cucina thailandese, lasciati trasportare in un viaggio culinario emozionante.</p>
                                
                            </div>
                        
                </div>

            




               

               <!-- terza card -->
                <div class="card" :class="{ 'card-hover': hoveredCard === 'card3' }" style="width: 18rem;" id="card3" @mouseover="hoveredCard = 'card3'"  @mouseout="hoveredCard = null">
                    
                    
                        <img class="card-img-top mt-3" src="https://cdn.pixabay.com/photo/2021/02/07/13/07/pizza-5991179_960_720.png" alt="Pizza">

                        <!-- IMG HOVER  -->

                        <img class="img-hover" src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg" alt="Street Food">
                            
                        
                        <div class="card-body">
                                <h5 class="card-title text-uppercase">Pizza: orgoglio italiano!</h5>
                                <p class="card-text">Ordina la pizza perfetta che stavi desiderando da tanto tempo. Dai classici come la Margherita ai gusti più audaci, la nostra selezione di pizze ti farà scoprire un mondo di sapore.</p>
                                
                        </div>
                    
                </div>

           </div> 

           <!-- Call to action -->

           <button type="button" class="btn btn-secondary btn-sm text-uppercase mb-5 mt-3">Ordina ora ed esplora i locali intorno a te!</button>

   </div> 


   <!-- Sezione form-consegna -->
   <div class="form-consegna d-flex pt-5">

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
    data() {
    return {
      hoveredCard: null
    };
  }
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
   height: 400px;
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


/* CARD RULES */
.card-img-top{
    border-radius: 10%;
    height: 240px;
    
}

.card{
    background-color:rgb(255, 204, 29);
    border: 1px solid rgb(255, 204, 29);
    position: relative;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out; 
    
}

.card p{
    display: none;
}

.card .img-hover{
    display: none;
}

.card-hover {
  position: relative;
  z-index: 1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  color:white;
  height: 350px;
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: rgb(153, 0, 0);
 
  
}



.card-hover p{
    display: block;
}

.card-hover h5{
    display: none;
}

.card-hover .card-img-top{
    display: none;
}

.card-hover .img-hover{
    display: block;

}

/* .card-hover img {
    width: 50px;
    height: 50px;
    text-align: center;
} */

.card-hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(238, 192, 142, 0.5);
  z-index: -1;
  transition: opacity 0.5s ease-out;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.card-hover:hover::before {
  opacity: 0;
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
   background-image: linear-gradient(rgb(255, 204, 0),rgb(251, 71, 0)); /* Colore a metà tra arancione e giallo */
   padding-bottom: 20px;
   min-height: auto;
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
      height: 1200px;
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
    display: flex;
    flex-direction: column;
   justify-content: center;
    width: 400px;
  }

  .form-consegna h3 {
    font-size: 20px;
    align-items: center;
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

  .form-consegna img {
    display: none;
  }

}





</style>