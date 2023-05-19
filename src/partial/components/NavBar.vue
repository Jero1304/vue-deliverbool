<template>
    <div class="nav-container">
        <div class="container-md">
            <div class="navbar">
                <button v-for="(button, index) in buttons" :key="index" class="navbar-button"
                    :class="{ active: activeButton === index }" @mouseover="setActiveButton(index)"
                    @mouseleave="resetActiveButton">
                    {{ button.text }}
                </button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            buttons: [
                { text: 'HOME' },
                { text: 'RESTORANTI' },
                { text: 'TIPOLOGIE' },
                { text: 'PIATTI' },
                { text: 'RISTORATORE' },
                { text: 'IMPOSTAZIONI' },
            ],
            activeButton: null
        };
    },
    methods: {
        setActiveButton(index) {
            this.activeButton = index;
        },
        resetActiveButton() {
            this.activeButton = null;
        }
    }
};
</script>
  
<style lang="scss">
@import '../src/scss/variables.scss';

.navbar {
    display: flex;
    margin-top: 5px;
    justify-content: space-around;
}

.navbar-button {
    border: none;
    font-size: 12px;
    font-weight: 900;
    padding: 5px 10px;
    background-color: $yellow;
    color: #555;
    border-radius: 20px;
    transition: all 0.3s ease;
    margin-right: 10px;
    cursor: pointer;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
}

.navbar-button.active {
    background-color: $orange;
    color: #fff;
    animation-name: bounce;
}

.nav-container {
    background-color: $yellow_light;
    margin-top: -5px;
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
</style>
  