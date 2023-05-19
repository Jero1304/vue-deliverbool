<template>
    <section class="nav-footer">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h3>scopri deliveboo</h3>
                    <ul class="menu">
                        <li class="menu_item">Chi siamo</li>
                        <li class="menu_item">Lavora con noi</li>
                        <li class="menu_item">Diventa nostro partner</li>
                    </ul>
                </div>
                <div class="col">
                    <h3>note legali</h3>
                    <ul class="menu">
                        <li class="menu_item">Termini & condizioni</li>
                        <li class="menu_item">Informativa sulla privacy</li>
                    </ul>
                </div>
                <div class="col">
                    <h3>contatti</h3>
                    <ul class="menu">
                        <li class="menu_item">e-mail: info@deliveboo.it</li>
                        <li class="menu_item social_icon">
                            <a href="https://www.facebook.com/" target="_blank" class="fb">
                                <font-awesome-icon :icon="['fab', 'facebook-f']" />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" class="insta">
                                <font-awesome-icon :icon="['fab', 'instagram']" />
                            </a>
                            <a href="https://twitter.com/" target="_blank" class="tw">
                                <font-awesome-icon :icon="['fab', 'twitter']" />
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
    background-color: $azur;

    .row{
        display: flex;
    }

    .social_icon{
        display: flex;
        gap: 1rem;
        font-size: 24px;
    }

}


</style>