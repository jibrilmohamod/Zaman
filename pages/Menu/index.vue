<template>
    <div class="basis-1/3 pb-4">
        <TheHeader title="Our Menu">
            <template #image>
                <NuxtImg provider="cloudinary"
                         format="webp"
                         loading="lazy"
                         alt="image"
                         sizes="sm:100vw md:50vw xl:1600px"
                         :modifiers="{ effect: 'colorize:30', color: 'black' }"
                         src="v1694095370/2O0A8677_x3a9xc.webp"
                         class="w-full h-full object-cover object-center" />
            </template>
        </TheHeader>
        <div class="container  m-auto px-2 h-fit">

            <h4 class="xl:w-2/4 xl:text-4xl py-5 text-2xl uppercase xl:pb-16 xl:pt-12">
                Enjoy a diverse culinary adventure with our <NuxtLink class="text-[#DD5903] cursor-pointer border-button">
                    breakfast
                </NuxtLink> ,
                <NuxtLink class="text-[#DD5903] cursor-pointer border-button">
                    lunch</NuxtLink> , and
                <NuxtLink class="text-[#DD5903] cursor-pointer border-button">dinner</NuxtLink> options,
                providing something
                providing
                something
                delightful for every moment of the day.
            </h4>


            <!-- Menu Categories  links -->
            <div class="">
                <div class="lg:flex gap-16">
                    <div>
                        <NuxtImg provider="cloudinary"
                                 format="webp"
                                 loading="lazy"
                                 alt="image"
                                 sizes="sm:100vw md:50vw lg:800px"
                                 :modifiers="{ effect: 'colorize:30', color: 'black' }"
                                 :src="BreakfastMenu.image"
                                 class="w-full object-cover object-center rounded-t-md h-64 xl:h-full" />
                    </div>
                    <div class="xl:w-1/2 xl:flex flex-col justify-center xl:gap-5">
                        <h4
                            class="text-orange-600 uppercase xl:text-4xl xl:font-semibold text-2xl text-center xl:text-start pt-2 font-semibold">
                            {{ BreakfastMenu.name }}
                        </h4>
                        <p class="text-center font-jost xl:w-5/6 xl:text-left xl:text-3xl xl:font-Cormorant pt-2">
                            Indulge in the most important meal of the day with our breakfast menu, featuring a delightful
                            array of dishes to kickstart your morning with flavor and energy.
                        </p>
                        <NuxtLink :to="`/menu/${BreakfastMenu.slug}`"
                                  class="flex justify-center xl:justify-normal pb-5">
                            <!-- title  -->
                            <NuxtButton :name="` Explore ${BreakfastMenu.name}`"
                                        class="text-white">
                            </NuxtButton>
                        </NuxtLink>
                    </div>
                </div>

                <NuxtImg provider="cloudinary"
                         format="webp"
                         loading="lazy"
                         alt="image"
                         sizes="sm:100vw md:50vw lg:800px"
                         src="v1694008223/davide-cantelli-jpkfc5_d-DI-unsplash-780x520_stwaqq.jpg"
                         class="w-full object-cover object-center rounded-md h-64 lg:hidden pb-4" />


                <!-- Main Menu Link  -->
                <div class="lg:flex gap-16 xl:py-16">
                    <div class="xl:w-1/2 xl:flex flex-col justify-center items-end gap-5">
                        <h4
                            class="text-orange-600 uppercase xl:text-4xl xl:font-semibold text-2xl text-center font-semibold">
                            {{ MainMenu.name }}
                        </h4>
                        <p class="text-center font-jost xl:w-5/6 xl:text-right xl:text-3xl xl:font-Cormorant pt-2">
                            Our main menu is a culinary masterpiece, offering a diverse selection of dishes that cater to
                            every palate, ensuring a memorable dining experience for all our guests.
                        </p>
                        <NuxtLink :to="`/menu/${MainMenu.slug}`"
                                  class="flex justify-center xl:justify-normal pb-3">
                            <!-- title  -->
                            <NuxtButton :name="` Explore ${MainMenu.name}`"
                                        class="text-white">
                            </NuxtButton>
                        </NuxtLink>

                    </div>
                    <div>
                        <NuxtImg provider="cloudinary"
                                 format="webp"
                                 loading="lazy"
                                 alt="image"
                                 sizes="sm:100vw md:50vw lg:800px"
                                 :modifiers="{ effect: 'colorize:30', color: 'black' }"
                                 :src="MainMenu.image"
                                 class="w-full object-cover object-center rounded-t-md h-64 xl:h-full " />
                    </div>
                </div>

                <!-- Beverage Menu Link -->
                <div class="lg:flex gap-16 xl:pb-10 xl:pt-0 pt-10">
                    <div>
                        <NuxtImg provider="cloudinary"
                                 format="webp"
                                 loading="lazy"
                                 alt="image"
                                 sizes="sm:100vw md:50vw lg:800px"
                                 :modifiers="{ effect: 'colorize:30', color: 'black' }"
                                 :src="Beverages.image"
                                 class="w-full object-cover object-center rounded-t-md h-64 xl:h-full" />
                    </div>
                    <div class="xl:w-1/2 xl:flex flex-col justify-center xl:gap-5">
                        <h4
                            class="text-orange-600 uppercase xl:text-4xl xl:font-semibold text-2xl text-center xl:text-start pt-2 font-semibold">
                            {{ Beverages.name }}
                        </h4>
                        <p class="text-center font-jost xl:w-5/6 xl:text-left xl:text-3xl xl:font-Cormorant pt-2">
                            Explore our carefully curated Beverages Menu, a delightful array of drinks that includes
                            everything from classics to innovative creations, ensuring the perfect beverage pairing for your
                            dining pleasure.
                        </p>
                        <NuxtLink :to="`/menu/${Beverages.slug}`"
                                  class="flex justify-center xl:justify-normal pb-5">
                            <!-- title  -->
                            <NuxtButton :name="` Explore ${Beverages.name}`"
                                        class="text-white">
                            </NuxtButton>
                        </NuxtLink>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script setup>
const { data } = await useFetch('/api/menu');
const menu = ref(data.value.menu);
// destructure menu categories from menu 
const { BreakfastMenu, MainMenu, Beverages } = menu.value;
</script>

<style scoped>
.border-button {
    background-color: transparent;
    border: none;
    position: relative;
    overflow: hidden;

    transition: color 0.3s ease;
}

.border-button::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    /* Height of the bottom border */
    background-color: #ff7b00;
    /* Color of the animated border */
    transition: width 0.3s ease;

}

.border-button:hover::before {
    width: 100%;
}
</style>