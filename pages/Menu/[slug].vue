<template>
    <div class="basis-1/3 pb-4">
        <TheHeader :title="menu.name">
            <template #image>
                <NuxtImg provider="cloudinary"
                         format="webp"
                         loading="lazy"
                         alt="image"
                         sizes="sm:100vw md:50vw lg:800px"
                         :modifiers="{ effect: 'colorize:30', color: 'black' }"
                         src="v1694095370/2O0A8677_x3a9xc.webp"
                         class="w-full h-full object-cover object-center" />
            </template>
        </TheHeader>
        {{ slug }}
        <div>
            <!-- Tab buttons -->
            <div class="tab-buttons flex flex-wrap"
                 v-if="menu">
                <button v-for="(tab, index) in menu.categories[0]"
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
                    {{ menu.categories[0][activeTab] }}
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup>
// get route params 
const route = useRoute();
const slug = ref(route.params.slug);
// get menu items from server
const { data } = await useFetch('/api/menu');
const FullMenu = ref(data.value.menu);
// get corresponding menu that has the same slug as the route params using destructuring
const menu = ref(null);
const { BreakfastMenu, MainMenu } = FullMenu.value;
if (route.params.slug === 'BreakfastMenu') {
    menu.value = BreakfastMenu;
} else {
    menu.value = MainMenu;
}

// State
const activeTab = ref(0);

// Methods
const toggleTab = (index) => {
    activeTab.value = index;
};
</script>

<style scoped>
.tab-buttons {
    display: flex;
}

.tab-buttons button {
    padding: 10px 20px;
    cursor: pointer;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 5px 5px 0 0;
}

.tab-buttons button.active {
    background-color: #fff;
    border-bottom: 1px solid #fff;
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
