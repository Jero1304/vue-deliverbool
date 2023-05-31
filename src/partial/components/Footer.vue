<template>
    <section class="wave-section">
        <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#FF5B00" fill-opacity="1"
                d="M0,192L48,181.3C96,171,192,149,288,133.3C384,117,480,107,576,90.7C672,75,768,53,864,64C960,75,1056,117,1152,138.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>
    </section>

    <section class="nav-footer">
        <div class="container">
            <div class="row d-flex">
                <div class="col d-flex justify-content-center align-item-center">
                    <figure class="thumb img-fluid flex-shrink-0">
                        <img src="/images/hamburger-logo.png" alt="">
                    </figure>
                </div>
                <div class="col flex-wrap">
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
                <div class="col flex-wrap">
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
                <div class="col flex-wrap">
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

}
</script>

<style lang="scss" scoped>
@use '../src/scss/variables' as *;

.wave-section {

    .wave {
        background-color: rgb(255, 204, 0);
    }
}

.nav-footer {
    background-color: $orange;
    padding-top: 25px;

    .row {
        display: flex;
    }

    .menu_item {
        cursor: pointer;
        line-height: 2.8rem;

        span {
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


h4 {
    text-transform: uppercase;
    padding: 5px 0;
    color: $bordeaux;
}

.social_icon {
    font-size: 34px;
    display: flex;
    gap: 0.5rem;

    .fb {
        color: blue;
    }

    .insta {
        color: rgb(255, 3, 87);
    }

    .icon {

        border-radius: 999px;
        padding: 0 8px;
        transition: box-shadow 0.3s ease;

        &:hover {
            box-shadow: 0 0 10px $yellow;
        }

    }

}

.copy {
    background-color: grey;
}

.thumb {
    min-width: 200px;
    max-width: 250px;

}
</style>
