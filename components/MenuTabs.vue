<template>
    <div>
        <!-- Tab dropdown -->
        <select v-model="activeTab"
                class="py-2 px-3 text-lg text-[#DD5903] w-full focus:outline-none uppercase ">
            <!-- default option that is disabled -->
            <option disabled
                    value="0">Select a Menu</option>
            <!-- loop through tabs array and create an option for each tab -->
            <option v-for="(tab, index) in tabs"
                    :key="index"
                    :value="index">{{ tab.name }}</option>
        </select>

        <!-- Tab content with transition -->
        <transition name="fade"
                    mode="out-in"
                    enter-active-class="animate__animated animate__bounceInDown"
                    leave-active-class="animate__animated animate__fadeOutDown">
            <div :key="activeTab"
                 class="tab-content">
                <div v-for="(item, index) in items"
                     :key="index">
                    <MenuItem :name="item.name"
                              :ingredients="item.ingredients"
                              :price="item.price"
                              :image="item.image" />
                </div>
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
const items = ref(null);

// Watch for changes in the activeTab and update items accordingly
watchEffect(() => {
    if (props.tabs[activeTab.value]) {
        items.value = props.tabs[activeTab.value].items;
    }
});

// Toggle tab on mount if tabs array has more than one item
onMounted(() => {
    if (props.tabs.length > 1) {
        activeTab.value = 1;
    }
});
</script>

<style scoped>
/* Add your CSS for styling the dropdown and transitions here */

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade leave-to {
    opacity: 0;
}
</style>