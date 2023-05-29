<template>
  <section class="wave-section">
    <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#FFCC00" fill-opacity="1"
        d="M0,160L48,170.7C96,181,192,203,288,218.7C384,235,480,245,576,250.7C672,256,768,256,864,234.7C960,213,1056,171,1152,144C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
      </path>
    </svg>
  </section>

  <div class="download d-flex">
    <div class="col-12 col-md-6 list-download">
      <ul>
        <li><img src="./img/icona-logo-small.png" alt="logo-delivery"></li>
        <li>
          <h3>Scarica l'app di Deliveboo!</h3>
        </li>
        <li>
          <p>Con Deliveboo, hai accesso a una vasta gamma di ristoranti e cucine, tutto a portata di app.</p>
        </li>
        <li>
          <button class="button-down"> <img
              src="https://cdn.icon-icons.com/icons2/271/PNG/256/apple_festival_social_apple_29950.png" alt="Apple-store">
            <h6>Apple Store</h6>
          </button>


          <button class="button-down"> <img
              src="https://cdn.icon-icons.com/icons2/3658/PNG/512/app_store_game_social_media_playstore_google_icon_228385.png"
              alt="Google-play">
            <h6>Google Play</h6>
          </button>

        </li>
      </ul>
    </div>

    <div class="col-12 col-md-6 img-phone">
      <img src="./img/app-1.png.png" alt="app-deliveboo">
      <img src="./img/app-3.png.png" alt="app-deliveboo" class="img-logo">
      <img src="./img/app-2.png.png" alt="app-deliveboo">

    </div>
  </div>
</template>
  
<script>
export default {
  name: 'Download'

}
</script>
  
<style scoped>
/* .wave-section{} */
.wave {
  background-color: rgba(214, 24, 24, 1);
}

.download {
  background-color: rgb(255, 204, 0);
  /* background-image: linear-gradient(rgb(255, 204, 0), rgba(251, 71, 0, 0.519)); */
  padding: 50px;

}

.list-download {
  display: flex;
  justify-content: center;
}


.list-download img {
  width: 70px;
  margin-left: 130px;
  margin-bottom: 30px;

}

.list-download h3 {
  text-transform: uppercase;
  color: rgb(255, 91, 0);
  font-size: 24px;
}

.list-download button {
  background-color: black;
  color: white;
  margin: 2px;
  display: inline-flex;
  /* Aggiunta della proprietà per posizionare i bottoni uno accanto all'altro */
  border-radius: 5px;
  font-size: 10px;
  width: auto;
  height: 50px;
  padding: 5px;


}

.button-down img {
  width: 15px;
  margin-left: 0;
  margin-right: 5px;
  margin-top: 10px;


}



.button-down h6 {
  font-size: 13px;
  margin-top: 10px;


}

.list-download button:hover {
  background-color: rgb(2, 214, 196);
  border: 1px solid rgb(2, 214, 196);
  cursor: pointer;
  box-shadow: 0 0 10px rgb(2, 214, 196);
}

.img-phone img {
  width: 280px;
}

.img-logo {
  margin-right: -30px;
  margin-left: -30px;
  margin-top: -40px;
}

.img-responsive {
  display: none;
}

@media screen and (max-width: 768px) {
  .download {
    height: auto;
    padding: 30px;
    display: flex;
    flex-direction: column;
  }

  .list-download {
    display: flex;
    justify-content: center;
    flex-direction: column;

  }

  .list-download button {
    background-color: black;
    color: white;
    margin: 2px;
    display: inline-flex;
    /* Aggiunta della proprietà per posizionare i bottoni uno accanto all'altro */
    border-radius: 5px;
    font-size: 10px;
    width: 70px;
    height: 50px;



  }

  .button-down img {
    width: 30px;
    height: 30px;
    margin-left: 15px;


  }



  .button-down h6 {
    display: none;
  }

  .list-download img {
    margin-bottom: 20px;
    margin-top: 0;
    margin-right: 100px;
    width: 150px;
  }

  .img-logo {
    margin-right: 0;
    margin-left: 0;
    margin-top: -20px;
  }

  .img-phone img {
    display: none;
  }

  .img-phone .img-logo {
    display: block;
    margin: 0 295px;
  }

}

/* TABLET VERSION */
@media screen and (max-width: 1657px) {
  .download {
    height: auto;
    padding: 30px;
    display: flex;

  }

  .list-download {
    padding-left: 0;
    text-align: center;

  }



  .list-download img {
    margin-bottom: 20px;
    margin-top: 0;
    margin-right: 100px;
    width: 150px;
  }

  .img-logo {
    margin-right: 0;
    margin-left: 0;
    margin-top: -20px;
  }


  .img-phone img {
    width: 150px;
  }

  /* .img-phone .img-logo{
    display: block;
    margin: auto;
  } */

  .list-download button {
    background-color: black;
    color: white;
    margin: 2px;
    display: inline-flex;
    /* Aggiunta della proprietà per posizionare i bottoni uno accanto all'altro */
    border-radius: 5px;
    font-size: 10px;
    width: 70px;
    height: 50px;



  }

  .button-down img {
    width: 30px;
    height: 30px;
    margin-left: 15px;


  }



  .button-down h6 {
    display: none;
  }
}

/* TABLET VERSION - BIG */
@media screen and (max-width: 959px) {
  .download {
    height: auto;
    padding: 30px;
    display: flex;

  }

  .list-download {
    padding-left: 0;
    text-align: center;

  }



  .list-download img {
    margin-bottom: 20px;
    margin-top: 0;
    margin-right: 100px;
    width: 150px;
  }

  .img-logo {
    margin-right: 0;
    margin-left: 0;
    margin-top: -20px;
  }


  .img-phone img {
    display: none;
  }

  .img-phone .img-logo {
    display: block;
    margin: auto;
    width: 150px;
  }

  /* .img-phone .img-logo{
    display: block;
    margin: auto;
  } */
}
</style>