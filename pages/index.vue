<template>
    <div class="">
        <TheHero />
        <TheAbout>
            <!-- button slot  -->
            <template #button>
                <NuxtButton class="font-[500] text-[14px] font-jost text-white"
                            name="Discover More">

                </NuxtButton>

            </template>

            <!-- Image slot -->
            <template #image>
                <div class="pt-8 h-64"
                     data-aos="fade-up"
                     data-aos-duration="1000">
                    <NuxtImg loading="lazy"
                             format="webp"
                             provider="cloudinary"
                             src="v1694008223/davide-cantelli-jpkfc5_d-DI-unsplash-780x520_stwaqq.jpg"
                             class="w-full h-full object-cover object-top rounded-md" />
                </div>
            </template>
        </TheAbout>
        <TheMenu />
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
                <div class="pt-8 h-64"
                     data-aos="fade-up"
                     data-aos-duration="1000">
                    <NuxtImg loading="lazy"
                             format="webp"
                             provider="cloudinary"
                             src="v1694007509/dining-table-donated-with-variety-foods-two-blue-bottles-mineral-water_114579-2722_lb5l53.jpg"
                             class="w-full h-full object-cover object-top rounded-md" />
                </div>
            </template>

        </TheAbout>
        <OrderComponent />
        <TheFooter />
    </div>
</template>
<script setup>


import AOS from 'aos';
onMounted(() => AOS.init());

</script>

<style lang="scss" scoped></style>
