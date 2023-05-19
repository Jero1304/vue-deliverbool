<template>
    <section class="nav-footer">
        <div class="container">
            <div class="row">
                <div class="col">                    
                    <ul class="menu">
                        <li>
                            <h4>scopri deliveboo</h4>
                        </li>
                        <li class="menu_item">
                            <span>Chi siamo</span> 
                        </li>
                        <li class="menu_item">
                            <span>Lavora con noi</span>
                        </li>
                        <li class="menu_item">
                            <span>Diventa nostro partner</span>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <ul class="menu">
                        <li>
                            <h4>note legali</h4>
                        </li>
                        <li class="menu_item">
                            <span>Termini & condizioni</span>
                        </li>
                        <li class="menu_item">
                            <span>Informativa sulla privacy</span>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <ul class="menu">
                        <li>
                            <h4>contatti</h4>
                        </li>
                        <li class="menu_item">
                            <span>info@deliveboo.it</span>
                        </li>
                        <li class="menu_item social_icon">
                            <a href="https://www.facebook.com/" target="_blank" class="icon fb">
                                <font-awesome-icon :icon="['fab', 'facebook-f']" />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" class="icon insta">
                                <font-awesome-icon :icon="['fab', 'instagram']" />
                            </a>
                            <a href="https://twitter.com/" target="_blank" class="icon tw">
                                <font-awesome-icon :icon="['fab', 'twitter']" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <figure>
                        <img src="/images/hamburger-logo.png" alt="">
                    </figure>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../src/scss/variables' as *;

.nav-footer{
    background-color: $orange;
    color: white;
    padding-top: 25px;

    .row{
        display: flex;
    }

    .menu_item{
        cursor:pointer;
        line-height: 2.8rem;
        span{
            transition: box-shadow 0.3s ease;
            &:hover {
                box-shadow: 0 0 10px $yellow;
            }
        }
      }
    }

    h4{
        text-transform: uppercase;
        padding: 10px 0;
    }

    .social_icon{
        font-size: 38px;
        display: flex;
        gap: 2.5rem;
        
        .icon{  
            color: $bordeaux;
            transition: box-shadow 0.3s ease;
            &:hover {
                box-shadow: 0 0 10px $yellow;
        }
        
    }


}


</style>