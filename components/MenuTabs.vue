<template>
    <div class="2xl:bg-red-700">
        <!-- Tab buttons -->
        <div class="tab-buttons">
            <button v-for="(tab, index) in tabs"
                    :key="index"
                    @click="toggleTab(index)"
                    :class="{ active: activeTab === index }">
                {{ tab.name }}
            </button>
        </div>

        <!-- Tab content with transition -->
        <transition name="fade"
                    mode="out-in">
            <div :key="activeTab"
                 class="tab-content">
                <!-- {{ tabs[activeTab].content }} -->
                dfd
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Props
const props = defineProps({
    tabs: {
        type: Object,
        required: true,
    },
});

// State
const activeTab = ref(0);

// Methods
const toggleTab = (index) => {
    activeTab.value = index;
};
</script>

<style scoped>
/* Add your CSS for styling tabs and transitions here */
.tab-buttons {
    display: flex;

}

.tab-buttons button {
    padding: 10px 20px;
    cursor: pointer;
    background-color: #eee;
    border: none;
    /* Remove the default button border */
    border-radius: 5px 5px 0 0;
    position: relative;
    /* Required for pseudo-element */
    transition: border 0.3s;
    /* Transition for the border */
}

.tab-buttons button:hover {
    border-bottom: 2px solid #007BFF;
    /* Add border on hover */
}

.tab-buttons button.active {
    background-color: #fff;
}

/* Animation for the border */
.tab-buttons button::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #007BFF;
    transition: width 0.3s;
    /* Animation duration */
}

.tab-buttons button:hover::before {
    width: 100%;
    /* Animate from left to right on hover */
}

.tab-content {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 0 0 5px 5px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}
</style>