<template>
    <div class="basis-1/3 pb-4">
        <TheHeader title="Our Menu">
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
        <div class="container  m-auto px-2 h-fit">

            <h4 class="xl:w-2/4 xl:text-4xl py-5 text-2xl uppercase xl:py-8">
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
                <div class="lg:flex  gap-10">
                    <div>
                        <NuxtImg provider="cloudinary"
                                 format="webp"
                                 loading="lazy"
                                 alt="image"
                                 sizes="sm:100vw md:50vw lg:800px"
                                 :modifiers="{ effect: 'colorize:30', color: 'black' }"
                                 :src="BreakfastMenu.image"
                                 class="w-full object-cover object-center rounded-md h-64 xl:h-full" />
                    </div>
                    <div class="xl:w-1/2 xl:flex flex-col outline justify-center">
                        <h4 class="text-orange-600 uppercase xl:text-4xl xl:font-semibold">
                            {{ BreakfastMenu.name }}
                        </h4>
                        <p class="text-center font-jost xl:text-left xl:text-2xl xl:font-Cormorant pt-6">
                            Indulge in the most important meal of the day with our breakfast menu, featuring a delightful
                            array of dishes to kickstart your morning with flavor and energy.
                        </p>
                        <NuxtLink :to="`/menu/${MainMenu.name}`"
                                  class="flex justify-center xl:justify-normal pb-5">
                            <!-- title  -->
                            <NuxtButton :name="` Explore ${BreakfastMenu.name}`"
                                        class="text-white">
                            </NuxtButton>
                        </NuxtLink>
                    </div>

                </div>


                <!-- Main Menu Link  -->
                <div class="lg:flex  gap-10">
                    <div class="xl:w-1/2 xl:flex flex-col outline justify-center">
                        <h4 class="text-orange-600 uppercase xl:text-4xl xl:font-semibold">
                            {{ MainMenu.name }}
                        </h4>
                        <p class="text-center font-jost xl:text-left xl:text-2xl xl:font-Cormorant pt-5">
                            Our main menu is a culinary masterpiece, offering a diverse selection of dishes that cater to
                            every palate, ensuring a memorable dining experience for all our guests.
                        </p>
                        <NuxtLink :to="`/menu/${MainMenu.name}`"
                                  class="flex justify-center xl:justify-normal">
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
                                 class="w-full object-cover object-center rounded-md h-64 xl:h-full " />
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
const { BreakfastMenu, MainMenu } = menu.value;
// destrucure Breakfast Categories from BreakfastMenu
const { categories } = BreakfastMenu;
// destructure beverages and Breakfast Combos from Breakfast Categories Object
const { Beverages, BreakfastCombos } = categories[0];
//destructure categories from Beverages
const { ClassicMilkshakes, Coladas, FreshJuices, HotBeverages, IcedDrinks, Lemonades, Milkshakes, Palma, SignatureDrinks, Smoothies } = Beverages.categories[0];
// destructre Main Categories from MainMenu
const { Categories } = MainMenu;

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