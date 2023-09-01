<template>
    <div class="relative text-white">
        <!-- Add a dark overlay -->
        <div class="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div class="md:hidden">
            <!-- logo -->
            <NuxtLink to="/">
                <!-- site name and logo -->
                <div class="text-white absolute z-20 top-4 left-4">
                    <h1 class="h-12 p-2 text-4xl font-Lexend">zaman</h1>
                </div>
            </NuxtLink>

            <!-- Hambuger menu -->
            <button @click="showMobileNav = !showMobileNav"
                    class="absolute top-4 right-4 z-20 p-2 bg-white rounded-full">
                <IconCSS name="ci:menu-alt-01"
                         class="text-4xl text-black" />
            </button>

            <!-- call to action -->
            <div class="absolute inset-0 flex items-center justify-center flex-col z-20 gap-4">

                <div class=" uppercase font-jost">
                    | Welcome to Zaman |
                </div>

                <div class="text-[40px] text-center font-semibold leading-tight text-gray-50">
                    Delicious Food & Wonderful Eating Experience
                </div>

                <p class="text-xl  px-10 text-center font-jost">
                    serving food , harmony and happiness since 1999
                </p>


            </div>
        </div>

        <!-- Your carousel code -->
        <div class="relative md:w-full ">
            <NuxtCarousel :autoplay="3000"
                          :items-to-show="1"
                          :wrap-around="true"
                          :transition="2000"
                          class="h-screen relative ">
                <NuxtSlide v-for="slide in data.images"
                           :key="slide"
                           class="h-screen carousel__item">
                    <!-- Zoom effect on hover -->
                    <div class="h-full overflow-hidden w-full">
                        <NuxtImg :src="slide.src"
                                 class="h-full object-cover object-top w-full" />
                    </div>
                </NuxtSlide>

                <template #addons></template>
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
    background-color: rgba(0, 0, 0, );
    /* Adjust the opacity as needed */
}

.opacity-50 {
    opacity: 0.55;
    /* Adjust the opacity as needed */
}

/* Z-index to control stacking order */
.z-10 {
    z-index: 10;
}

.carousel__slide--active {
    opacity: 1;
    transform: scale(1.1);
    transition: all 10s ease-in-out;
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg);
    transition: all 10s ease-in-out;

}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg);
    transition: all 10s ease-in-out;
}
</style>
