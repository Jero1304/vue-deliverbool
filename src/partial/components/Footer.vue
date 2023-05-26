<template>
    <div class="footer">
        <div class="container d-flex justify-content-center">
            <div class="row">
                <div class="col-sm-3 d-flex justify-content-center">
                    <img src="/images/hamburger-logo.png" alt="Burger">
                </div>
                <div class="col-sm-3 d-flex justify-content-center">
                    <ul>
    <section class="nav-footer">
        <div class="container">
            <div class="row d-flex">
                <div class="col">
                    <figure class="thumb img-fluid flex-shrink-0">
                        <img src="/images/hamburger-logo.png" alt="">
                    </figure>
                </div>                
                <div class="col flex-md-wrap">                    
                    <ul class="menu">
                        <li>
                            <h3>Informazioni</h3>
                        </li>
                        <li><a href="#">Chi siamo</a></li>
                        <li><a href="#">Termini e condizioni</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="col-sm-3 d-flex justify-content-center">
                    <ul>
                <div class="col flex-md-wrap">
                    <ul class="menu">
                        <li>
                            <h3>Servizio clienti</h3>
                        </li>
                        <li><a href="#">Contatti</a></li>
                        <li><a href="#">Domande frequenti</a></li>
                        <li><a href="#">Assistenza online</a></li>
                    </ul>
                </div>
                <div class="col-sm-3 d-flex justify-content-center">
                    <ul>
                <div class="col flex-md-wrap">
                    <ul class="menu">
                        <li>
                            <h3>Social</h3>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/" target="_blank" class="icon fb">
                                <font-awesome-icon :icon="['fab', 'facebook']" /> FaceBook
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" target="_blank" class="icon tw">
                                <font-awesome-icon :icon="['fab', 'twitter']" /> Twitter
                            </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/" target="_blank" class="icon insta">
                                <font-awesome-icon :icon="['fab', 'instagram']" /> Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </section>
    <section class="copy">
        <div class="container text-center">
            <span>
                <i>DeliveBoo 2023&copy; created by <strong>Team 6</strong> of Boolean #Class86</i>
            </span>
        </div>

    </section>
</template>
  
<script>
export default {
    name: 'Footer',
};
</script>
  
<style lang="scss">
@import '../src/scss/variables.scss';

.footer {
    background-color: #f2f2f2;
    padding: 20px 0;
    background-color: $orange;
}

.footer h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: $bordeaux;
    text-transform: uppercase;
}

.footer ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.footer ul li {
    margin-bottom: 10px;
        .fb{
            color: blue;
        }
        .insta{
            color: rgb(255, 3, 87);
        }
        
        .icon{  
            
            border-radius: 999px ;
            padding: 0 8px;
            transition: box-shadow 0.3s ease;
            &:hover {
                box-shadow: 0 0 10px $yellow;
        }
        
    }
    
}
.copy{
        background-color: grey;
    }

.footer ul li a {
    color: #333;
    color: white !important;
    text-decoration: none;
}

.footer ul li a:hover {
    text-shadow: 0 0 10px $azur;
    font-weight: 600;
    color: $bordeaux;
    transform: scale(1.2);
}
</style>
  