<template>
    <div class="">
        <TheHero />
        <TheAbout class="">
            <!-- button slot  -->
            <template #button>
                <NuxtButton class="font-[500] text-[14px] font-jost text-white"
                            name="Discover More">

                </NuxtButton>

            </template>

            <!-- Image slot -->
            <template #image>
                <div class="pt-8 h-64 md:h-96 2xl:h-[41vh]"
                     data-aos="fade-up"
                     data-aos-duration="1000">
                    <NuxtImg loading="lazy"
                             format="webp"
                             alt="image"
                             :modifiers="{ effect: 'colorize:50', color: 'black' }"
                             sizes="sm:100vw md:50vw lg:600px"
                             provider="cloudinary"
                             src="v1694095333/2O0A2557_ui2lpn.webp"
                             class="w-full h-full object-cover md:object-cover rounded-md md:drop-shadow-2xl shadow-black" />
                </div>
            </template>

            <template #image2>
                <div class="pt-8  xl:w-[81.5%] 2xl:w-[72.2%] m-auto"
                     data-aos="fade-up"
                     data-aos-duration="1000">
                    <NuxtImg loading="lazy"
                             format="webp"
                             alt="image"
                             :modifiers="{ effect: 'colorize:50', color: 'black' }"
                             sizes="sm:100px md:50vw lg:600px"
                             provider="cloudinary"
                             src="v1694095366/2O0A2745_kh9t2d.webp"
                             class="w-full h-full object-cover md:object-cover rounded-md md:drop-shadow-2xl shadow-black" />
                </div>
            </template>
        </TheAbout>
        <!-- <TheMenu /> -->
        <TheAbout small-text="Right here waiting"
                  header="Visit Our Restaurant"
                  paragraph="Zaman Restaurant is located in the heart of Nairobi city, surrounded by the most popular tourist attractions. We are open every day from 9am to 11pm.">
            <!-- button slot  -->
            <template #button>
                <NuxtButton class="font-[500] text-[14px] font-jost text-white"
                            name="Get Directions">

                </NuxtButton>

            </template>

            <!-- Image slot -->
            <template #image>
                <div class="pt-8 h-64 md:h-96"
                     data-aos="fade-up"
                     data-aos-duration="1000">
                    <NuxtImg loading="lazy"
                             format="webp"
                             alt="image"
                             :modifiers="{ effect: 'colorize:50', color: 'black' }"
                             provider="cloudinary"
                             sizes="sm:100vw md:50vw lg:600px"
                             src="v1694007509/dining-table-donated-with-variety-foods-two-blue-bottles-mineral-water_114579-2722_lb5l53.jpg"
                             class="w-full h-full object-cover md:object-cover rounded-md md:drop-shadow-2xl shadow-black" />
                </div>
            </template>

        </TheAbout>

    </div>
</template>
<script setup>


import AOS from 'aos';
onMounted(() => AOS.init());

</script>

<style scoped></style>
