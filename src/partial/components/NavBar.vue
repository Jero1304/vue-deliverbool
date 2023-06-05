<template>
    <div class="nav-main">
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
            <div class="container-fluid justify-content-between">
                <div>
                    <a class="navbar-brand">
                        <router-link to="/">
                            <img src="./img/favicon-deliveboo.png" alt="logo" class="logo-responsive">
                        </router-link>
                    </a>
                    <a class="navbar-brand">
                        <router-link to="/">
                            <img src="./img/logo-navbar-small.png" alt="logo" class="logo">
                        </router-link>
                    </a>
                </div>
                <div>
                    <button class="nav-icon navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse mx-3 " id="navbarNavDropdown">
                        <ul class="navbar-nav gap-3">
                            <!-- <li class="nav-item text-uppercase">
                                <a class="nav-link nav-btn" aria-current="page" href="#">registrati o accedi</a>
                            </li> -->
                            <!-- <li class="nav-item text-uppercase">
                                <a class="nav-link nav-btn" href="">I nostri ristoranti</a>
                            </li>
                            <li class="nav-item text-uppercase">
                                <a class="nav-link nav-btn" href="">Assistenza</a>
                            </li> -->
                            <li class="nav-item text-uppercase">
                                <a class="nav-link nav-btn" href="">
                                    <router-link style="text-decoration:none;" to="/"> Home </router-link></a>
                            </li>
                            <!-- <li class="nav-item text-uppercase">
                                <a class="nav-link nav-btn" href="#">
                                    <router-link to="/singlePlate"> Piatto Singolo </router-link></a>
                            </li> -->
                            <li class="nav-item text-uppercase">
                                <a class="nav-link nav-btn" href="http://127.0.0.1:8000/register">
                                    Registrati
                                </a>
                            </li>
                            <li class="nav-item text-uppercase">
                                <a class="nav-link nav-btn" href="http://127.0.0.1:8000/login">
                                    Accedi
                                </a>
                            </li>


                            



                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>

document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            var navbarToggler = document.querySelector('.navbar-toggler');
            var navbarCollapse = document.querySelector('.navbar-collapse');


            navbarToggler.classList.add('collapsed');
            navbarCollapse.classList.remove('show');
        });
    });
});

import 'bootstrap/dist/js/bootstrap.bundle'

</script>

<style lang="scss">
@import '../src/scss/variables.scss';

.nav-main {
    background-color: $yellow;
}

.nav-btn {
    background-color: $orange !important;
    border-radius: 20px !important;
    font-size: 12px !important;
    font-weight: 900 !important;
    color: white !important;
    padding: 5px 10px !important;
}

.nav-btn a {
    color: white;
}

.nav-btn:hover {
    background-color: $azur !important;
    box-shadow: 0 0 10px $azur;

}

.nav-icon {
    border: 0px !important;
    color: $orange;
    outline: none !important;
    box-shadow: none !important;
}

.logo-responsive {
    display: none;
}

.logo {
    display: block;
    width: 200px;
}



// RESPONSIVE RULES

@media (max-width: 991.98px) {
    .bg-body-tertiary {
        background-color: $yellow !important;
    }

    .logo-responsive {
        display: block;
    }

    .logo {
        display: none;
    }
}
</style>
