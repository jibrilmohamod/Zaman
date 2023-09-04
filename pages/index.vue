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
    </div>
</template>
<script setup>


import AOS from 'aos';
onMounted(() => AOS.init());

</script>

<style lang="scss" scoped></style>
