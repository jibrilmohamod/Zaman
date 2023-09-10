<template>
    <div id="app"
         class="h-screen outline">
        <div class="relative slide overflow-hidden">
            <div class="carousel-inner relative overflow-hidden w-full">
                <div v-for="(img, i) in images"
                     :id="`slide-${i}`"
                     :key="i"
                     :class="`${active === i ? 'active' : 'left-full'}`"
                     class="carousel-item inset-0 relative w-full transform transition-all duration-1000 ease-in-out">
                    <NuxtImg class="block w-full h-screen object-cover"
                             :src="img"
                             provider="cloudinary"
                             format="webp"
                             sizes="sm:100vw md:50vw lg:1000px"
                             :modifiers="{ effect: 'colorize:40', color: 'black' }"
                             alt="First slide" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const images = ref([
    'v1694098771/2O0A8697_etgcqe.webp',
    'v1694088475/2O0A8672_njnwpz.webp',
    'v1694088729/2O0A8663_aaa9eg.webp',
]);

let active = ref(0);

onMounted(() => {
    let i = 0;
    setInterval(() => {
        if (i > images.value.length - 1) {
            i = 0;
        }
        active.value = i;
        i++;
    }, 5000);
});
</script>

<style  scoped>
.left-full {
    left: -100%;
}

.carousel-item {
    float: left;
    position: relative;
    display: block;
    width: 100%;
    margin-right: -100%;
    backface-visibility: hidden;
}

.carousel-item.active {
    left: 0;
}
</style>