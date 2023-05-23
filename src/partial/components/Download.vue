<template>
    <div class="download d-flex">
      <div class="col-6 list-downloand">
           <ul>
            <li><img src="./img/icona-logo.png" alt="logo-delivery"></li>
            <li><h3>Scarica l'app di Deliveboo!</h3></li>
            <li><p>Con Deliveboo, hai accesso a una vasta gamma di ristoranti e cucine, tutto a portata di app. </p></li>
            <li><button> Apple Store</button> 
              <button>Google Play</button></li>
           </ul>
      </div>

      <div class="col-6 img-phone">

        <img src="./img/app-1.png.png" alt="app-deliveboo">
        <img src="./img/app-2.png.png" alt="app-deliveboo" class="img-logo">
        <img src="./img/app-3.png.png" alt="app-deliveboo">

        <img src="./img/app-1.png.png" alt="app-deliveboo" class="img-responsive">
        
       
        

      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Download'
    
  }
  </script>
  
  <style scoped>
  .download {
    background-color: rgb(255, 204, 0); /* Colore arancione */
    background-image: linear-gradient(rgb(255, 204, 0),rgba(251, 71, 0, 0.519)); /* Colore a metà tra arancione e giallo */
    padding: 100px;
    height: 600px;

  }

/* LIST RULES */
.list-downloand{
  padding-left: 100px;
  
}
.list-downloand img{
  margin-bottom: -180px;
  margin-top: -100px;
}

.list-downloand h3{
  text-transform: uppercase;
  color: rgb(255, 91, 0);
  
}

.list-downloand button{
  background-color: black;
  color: white;
  margin: 2px;
  padding: 10px;
  border-radius: 10px;
}

.list-downloand button:hover{
  background-color: rgb(2, 214, 196);
  border: 1px solid rgb(2, 214, 196);
   cursor:pointer;
   box-shadow: 0 0 10px rgb(2, 214, 196);
}

  /* PHONE RULES */
  .download img{
    width: 280px;
    
  }



  .img-logo{
    margin-right: -50px;
    margin-left: -50px;
    margin-top: -90px;
    
  }

  .img-responsive{
    display: none;
  }

  /* RESPONSIVE RULES */
  @media screen and (max-width: 1680px) {
  .list-downloand {
    padding-left: 0;
  }

  .list-downloand img {
    margin-bottom: 0;
    margin-top: 0;
  }

  .img-logo {
    margin-right: 0;
    margin-left: 0;
    margin-top: 0;
  }

  .img-phone img {
    display: none;
  }

  .img-responsive{
    display: block;
  }

}


  </style>