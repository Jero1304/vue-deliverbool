<template>
    <div class="nav-container d-flex align-items-center">
        <div class="container-sm">
            <img src="logo.png" alt="logo" />
        </div>
        <div class="container-md">
            <div class="navbar align-items-center justify-content-end">
                <button v-if="!isMobile" v-for="(button, index) in buttons" :key="index" class="navbar-button"
                    :class="{ active: activeButton === index }" @mouseover="setActiveButton(index)"
                    @mouseleave="resetActiveButton">
                    {{ button.text }}
                </button>
                <div v-else>
                    <button class="navbar-button" :class="{ active: isDropdownOpen }" @click="toggleDropdown">
                        Menu
                    </button>
                    <ul v-show="isMobile && isDropdownOpen" class="dropdown-menu">
                        <li v-for="(button, index) in buttons" :key="index" class="dropdown-menu-item"
                            :class="{ active: activeButton === index }" @click="selectDropdownItem(index)">
                            {{ button.text }}
                        </li>
                    </ul>
                </div>
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
                { text: 'RESTAURANTI' },
                { text: 'TIPOLOGIE' },
                { text: 'PIATTI' },
            ],
            activeButton: null,
            isMobile: false,
            isDropdownOpen: false,
        };
    },
    mounted() {
        window.addEventListener('resize', this.checkMobile);
        this.checkMobile();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.checkMobile);
    },
    methods: {
        setActiveButton(index) {
            this.activeButton = index;
        },
        resetActiveButton() {
            this.activeButton = null;
        },
        checkMobile() {
            this.isMobile = window.innerWidth < 768;
            if (!this.isMobile) {
                this.isDropdownOpen = false;
            }
        },
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        selectDropdownItem(index) {
            this.activeButton = index;
            this.isDropdownOpen = false;
        },
    },
};
</script>

<style lang="scss">
@import '../src/scss/variables.scss';

.navbar {
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
  