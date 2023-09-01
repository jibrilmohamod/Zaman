<template>
    <div class="relative">
        <!-- Add a dark overlay -->
        <div class="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div class="md:hidden">
            <!-- logo -->
            <NuxtLink to="/">
                <!-- site name and logo -->
                <div class="text-white">
                    <h1 class="h-12 absolute top-4 left-4 z-20 p-2 text-2xl">Zaman</h1>
                </div>
            </NuxtLink>

            <!-- Hambuger menu -->
            <button @click="showMobileNav = !showMobileNav"
                    class="absolute top-4 right-4 z-20 p-2">
                <IconCSS name="heroicons-solid:menu-alt-3"
                         class="text-4xl text-white" />
            </button>
        </div>

        <!-- Your carousel code -->
        <div class="relative">
            <NuxtCarousel :autoplay="4000"
                          :items-to-show="1"
                          :wrap-around="true"
                          :transition="1000"
                          class="h-screen relative">
                <NuxtSlide v-for="slide in data.images"
                           :key="slide"
                           class="h-screen">
                    <NuxtImg :src="slide.src"
                             class="h-full object-cover" />
                </NuxtSlide>

                <template #addons> </template>
            </NuxtCarousel>
        </div>
    </div>
</template>

<script setup>
// create an image array

const { data } = useFetch("/api/images");
const images = ref(data);
</script>

<style scoped>
/* Style for the dark overlay */
.relative {
    position: relative;
}

.absolute {
    position: absolute;
}

.bg-black {
    background-color: rgba(0, 0, 0, 0.5);
    /* Adjust the opacity as needed */
}

.opacity-50 {
    opacity: 0.9;
    /* Adjust the opacity as needed */
}

/* Z-index to control stacking order */
.z-10 {
    z-index: 10;
}
</style>
