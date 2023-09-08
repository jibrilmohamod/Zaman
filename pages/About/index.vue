<template>
    <div class="h-fit">
        <TheHeader>
            <template #image>
                <NuxtImg provider="cloudinary"
                         loading="lazy"
                         format="webp"
                         alt="image"
                         sizes="sm:100vw md:50vw lg:400px"
                         :modifiers="{ effect: 'colorize:30', color: 'black' }"
                         src="v1694095370/2O0A8677_x3a9xc.webp"
                         class="w-full h-full object-cover object-center" />
            </template>
        </TheHeader>

        <!-- introduction  -->

        <TheAbout header="Zaman Restaurant"
                  small-text="Refreshing and delicious"
                  paragraph="Introducing Zaman, a hidden gem on Banda Street, Nairobi. Inspired by the city's vibrant culture, we offer a unique dining experience. Our menu blends Kenyan flavors with international twists, catering to all tastes. Join us at Zaman to savor Nairobi's essence through our dishes.">
            <!-- button slot  -->
            <template #button>
                <NuxtButton class="font-[500] text-[14px] font-jost text-white"
                            name="Explore our menu">
                </NuxtButton>
            </template>

            <!-- Image slot -->
            <template #image>
                <div class="pt-8 h-64"
                     data-aos="fade-up"
                     data-aos-duration="1000">
                    <NuxtImg loading="lazy"
                             format="webp"
                             alt="image"
                             sizes="sm:100vw md:50vw lg:400px"
                             provider="cloudinary"
                             :modifiers="{ effect: 'colorize:30', color: 'black' }"
                             src="v1694088526/2O0A8672_v4rney.webp"
                             class="w-full h-full object-cover object-top rounded-md" />
                </div>
                <div class="pt-8 h-64"
                     data-aos="fade-up"
                     data-aos-duration="1000">
                    <NuxtImg loading="lazy"
                             format="webp"
                             alt="image"
                             sizes="sm:100vw md:50vw lg:400px"
                             provider="cloudinary"
                             :modifiers="{ effect: 'colorize:30', color: 'black' }"
                             src="v1694088475/2O0A8688_zfjop8.webp"
                             class="w-full h-full object-cover object-top rounded-md" />
                </div>
            </template>
        </TheAbout>

        <!-- food philosophy -->

        <TheAbout small-text="quality & balance"
                  header="Our food philosophy"
                  paragraph="At Zaman, we believe in keeping it simple and balanced. Our dishes harmoniously blend local and global flavors, celebrating Nairobi's culinary diversity. Join us for a dining experience that captures the essence of our vibrant city">
            <template #button>
                <NuxtButton class="font-[500] text-[14px] font-jost text-white"
                            name="Book a Table">
                </NuxtButton>
            </template>

            <template #image>
                <div class="pt-8 h-[80vh]"
                     data-aos="fade-up"
                     data-aos-duration="1000">
                    <NuxtImg loading="lazy"
                             format="webp"
                             alt="image"
                             sizes="sm:100vw md:50vw lg:400px"
                             provider="cloudinary"
                             :modifiers="{ effect: 'colorize:30', color: 'black' }"
                             src="v1694095332/2O0A2488_1_a8ds1k.webp"
                             class="w-full h-full object-cover rounded-md" />
                </div>

                <div class="pt-8 h-64"
                     data-aos="fade-up"
                     data-aos-duration="1000">
                    <NuxtImg loading="lazy"
                             format="webp"
                             alt="image"
                             sizes="sm:100vw md:50vw lg:400px"
                             provider="cloudinary"
                             :modifiers="{ effect: 'colorize:30', color: 'black' }"
                             src="v1694095365/2O0A2618_nzalgk.webp"
                             class="w-full h-full object-cover object-top rounded-md" />
                </div>
            </template>
        </TheAbout>

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
                             alt="image"
                             sizes="sm:100vw md:50vw lg:400px"
                             provider="cloudinary"
                             src="v1694098771/2O0A8697_etgcqe.webp"
                             class="w-full h-full object-cover object-top rounded-md" />
                </div>
            </template>

        </TheAbout>
    </div>
</template>

<script setup>
useSeoMeta(
    {
        title: 'About Us | Zaman Restaurant',
        description: 'Zaman Restaurant is located in the heart of Nairobi city, surrounded by the most popular tourist attractions. We are open every day from 9am to 11pm.',
        ogTitle: 'About Us | Zaman Restaurant',
        ogDescription: 'Zaman Restaurant is located in the heart of Nairobi city, surrounded by the most popular tourist attractions. We are open every day from 9am to 11pm.',
    }
)

</script>

<style lang="scss" scoped></style>
