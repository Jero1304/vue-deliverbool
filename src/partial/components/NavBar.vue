<template>
    <div class="navbar">
        <button v-for="(button, index) in buttons" :key="index" class="navbar-button"
            :class="{ active: activeButton === index }" @mouseover="setActiveButton(index)" @mouseleave="resetActiveButton">
            {{ button.text }}
        </button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            buttons: [
                { text: 'Button 1' },
                { text: 'Button 2' },
                { text: 'Button 3' },
                { text: 'Button 4' },
                { text: 'Button 5' }
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
  
<style>
.navbar {
    display: flex;
}

.navbar-button {
    border: none;
    padding: 10px 20px;
    background-color: #f0f0f0;
    color: #555;
    border-radius: 20px;
    transition: all 0.3s ease;
    margin-right: 10px;
    cursor: pointer;
}

.navbar-button.active {
    background-color: #555;
    color: #fff;
    transform: translateX(10px);
}
</style>
  