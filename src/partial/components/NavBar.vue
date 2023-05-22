<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary nav-container">
        <div class="container-fluid justify-content-between">
            <div>
                <a class="navbar-brand" href="#"><img src="logo.png" alt="logo"></a>
            </div>
            <div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ">
                        <li class="nav-item navbar-button">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item navbar-button">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item navbar-button">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item navbar-button">
                            <a class="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
</script>

<style lang="scss">
@import '../src/scss/variables.scss';

.navbar_scope {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;
    justify-content: space-around;
}

.navbar-button {
    border: none;
    font-size: 12px;
    font-weight: 900;
    padding: 5px 10px;
    background-color: $orange;
    color: #fff;
    border-radius: 20px;
    transition: all 0.3s ease;
    margin-right: 10px;
    cursor: pointer;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
}

.navbar-button.active {
    background-color: $azur;
    animation-name: bounce;
    box-shadow: 0 0 10px rgb(2, 214, 196);
}

.nav-container {
    background-color: $yellow_light;
    margin-top: -5px;
}

.dropdown-menu {
    display: none;
    position: absolute;
    background-color: #f0f0f0;
    list-style-type: none;
    padding: 0;
    margin-top: 5px;
}

.dropdown-menu-item {
    padding: 10px;
    cursor: pointer;
}

.dropdown-menu-item.active {
    background-color: #555;
    color: #fff;
}

@keyframes bounce {
    0% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(10px);
    }

    100% {
        transform: translateX(0);
    }
}

@media (max-width: 768) {
    .navbar {
        flex-wrap: nowrap;
        overflow-x: auto;
    }

    .navbar-button {
        margin-right: 0;
        margin-bottom: 10px;
        flex-shrink: 0;
    }
}
</style>
