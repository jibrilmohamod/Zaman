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
                    <NuxtImg src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/davide-cantelli-jpkfc5_d-DI-unsplash-780x520.jpg"
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
                    <NuxtImg src="https://img.freepik.com/free-photo/dining-table-donated-with-variety-foods-two-blue-bottles-mineral-water_114579-2722.jpg?w=900&t=st=1693858469~exp=1693859069~hmac=afae6ff383c6193c8d8194f9692a2a0b37cd0bc7fdd6d9d5dde5d1ed5058d8e7"
                             class="w-full h-full object-cover object-top rounded-md" />
                </div>
            </template>

        </TheAbout>
        <OrderComponent />
    </div>
</template>
<script setup>


import AOS from 'aos';
onMounted(() => AOS.init());

</script>

<style lang="scss" scoped></style>
