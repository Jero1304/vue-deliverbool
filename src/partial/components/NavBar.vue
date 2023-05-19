<template>
    <div class="container-md">
        <div class="navbar">
            <button v-for="(button, index) in buttons" :key="index" class="navbar-button"
                :class="{ active: activeButton === index }" @mouseover="setActiveButton(index)"
                @mouseleave="resetActiveButton">
                {{ button.text }}
            </button>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            buttons: [
                { text: 'HOME' },
                { text: 'RESTOURANTS' },
                { text: 'TYPE' },
                { text: 'ORDERS' },
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
}

.navbar-button.active {
    background-color: $orange;
    color: #fff;
    transform: translateX(10px);
}
</style>
  