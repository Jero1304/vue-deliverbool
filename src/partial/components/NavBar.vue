<template>
    <div class="nav-main">
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
            <div class="container-fluid justify-content-between">
                <div>
                    <a class="navbar-brand" href="#"><img src="../public/img/logo-navbar.png.png" alt="logo"></a>
                </div>
                <div>
                    <button class="nav-icon navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul class="navbar-nav gap-3">
                            <li class="nav-item text-uppercase">
                                <a class="nav-link nav-btn" aria-current="page" href="#">home</a>
                            </li>
                            <li class="nav-item text-uppercase">
                                <a class="nav-link nav-btn" href="#">ristoranti</a>
                            </li>
                            <li class="nav-item text-uppercase">
                                <a class="nav-link nav-btn" href="#">tipologia</a>
                            </li>
                            <li class="nav-item text-uppercase">
                                <a class="nav-link nav-btn" href="#">piatti</a>
                            </li>

                            <li class="nav-item text-uppercase">
                                <a class="nav-link nav-btn" href="#">
                                    <router-link to="/home"> Home User </router-link></a>
                            </li>
                            <li class="nav-item text-uppercase">
                                <a class="nav-link nav-btn" href="#">
                                    <router-link to="/menu"> Home menu </router-link></a>
                            </li>



                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
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
</style>
