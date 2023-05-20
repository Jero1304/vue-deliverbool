<template>
    <section class="nav-footer">
        <div class="container">
            <div class="row">
                <div class="col">
                    <figure class="thumb">
                        <img src="/images/hamburger-logo.png" alt="">
                    </figure>
                </div>                
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
                            <h4>follow us</h4>
                        </li>
                        <li class="menu_item social_icon">
                            <a href="https://www.facebook.com/" target="_blank" class="icon fb">
                                <font-awesome-icon :icon="['fab', 'facebook']" />
                            </a>
                            <a href="https://twitter.com/" target="_blank" class="icon tw">
                                <font-awesome-icon :icon="['fab', 'twitter']" />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" class="icon insta">
                                <font-awesome-icon :icon="['fab', 'instagram']" />
                            </a>                            
                        </li>
                    </ul>
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
            transition: transform 0.3s ease;
            transition: text-shadow 0.3s ease;
            &:hover {
                text-shadow: 0 0 10px yellowgreen;
                font-weight: 600;
                color: $bordeaux;
                transform: scale(1.2);
            }
        }
      }
    }
    

    h4{
        text-transform: uppercase;
        padding: 5px 0;
        color: $bordeaux;
    }

    .social_icon{
        font-size: 34px;
        display: flex;
        gap: 0.5rem;

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


</style>