<template>
    <div class="nav-main">
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
            <div class="container-fluid justify-content-between">
                <div>
                    <a class="navbar-brand" href="#"><img src="logo.png" alt="logo"></a>
                </div>
                <div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item btn text-uppercase">
                                <a class="nav-link nav-btn" aria-current="page" href="#">HOME</a>
                            </li>
                            <li class="nav-item btn text-uppercase">
                                <a class="nav-link nav-btn" href="#">RISTORANTI</a>
                            </li>
                            <li class="nav-item btn text-uppercase">
                                <a class="nav-link nav-btn" href="#">TIPOLOGIA</a>
                            </li>
                            <li class="nav-item btn text-uppercase">
                                <a class="nav-link nav-btn" href="#">PIATTI</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
</script>

<style lang="scss">
@import '../src/scss/variables.scss';

.nav-main {
    background-color: $yellow_light;
}

.nav-btn {
    background-color: $orange !important;
    border-radius: 20px !important;
    font-size: 12px !important;
    font-weight: 900 !important;
    color: white !important;
    padding: 5px 10px !important;
}
</style>
