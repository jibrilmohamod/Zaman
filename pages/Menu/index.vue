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
        <div class="m-auto pl-6 pr-3 md:container ">
            <!-- Menu Section Header and Image -->
            <div class="py-5 text-center">

                <h3>
                    <span class="font-jost text-[#DD5903] uppercase font-semibold text-4xl"
                          id="p">Breakfast</span>
                    <span class="font-jost text-[#DD5903] uppercase font-semibold text-4xl"
                          id="p"> Menu</span>

                </h3>

            </div>
            <div v-for="(item, index) in BreakfastMenu.categories"
                 :key="index"
                 class="md:flex md:flex-wrap">
                <div class="basis-1/3 pb-4">
                    <div class="text-center">
                        <!-- small title  -->
                        <p class="font-jost text-[#DD5903] uppercase font-semibold"
                           id="p">{{ item.Beverages.name }}</p>
                        <!-- big title  -->
                        <h1 class="text-3xl uppercase font-semibold">
                            {{ item.Beverages.categories[0].ClassicMilkshakes.name }}
                        </h1>
                    </div>

                    <MenuItem v-for="(item, index) in item.Beverages.categories[0].ClassicMilkshakes.items"
                              :key="index"
                              :name="item.name"
                              :ingredients="item.ingredients"
                              :price="'Ksh ' + item.price">
                    </MenuItem>
                </div>

                <div class="basis-1/3 pb-4">
                    <div class="text-center">
                        <!-- small title  -->
                        <p class="font-jost text-[#DD5903] uppercase font-semibold"
                           id="p">{{ item.Beverages.name }}</p>
                        <!-- big title  -->
                        <h1 class="text-3xl uppercase font-semibold">
                            {{ item.Beverages.categories[0].Coladas.name }}
                        </h1>
                    </div>

                    <MenuItem v-for="(item, index) in item.Beverages.categories[0].Coladas.items"
                              :key="index"
                              :name="item.name"
                              :ingredients="item.ingredients"
                              :price="'Ksh ' + item.price">
                    </MenuItem>
                </div>

                <div class="basis-1/3 pb-4">
                    <div class="text-center">
                        <!-- small title  -->
                        <p class="font-jost text-[#DD5903] uppercase font-semibold"
                           id="p">{{ item.Beverages.name }}</p>
                        <!-- big title  -->
                        <h1 class="text-3xl uppercase font-semibold">
                            {{ item.Beverages.categories[0].FreshJuices.name }}
                        </h1>
                    </div>

                    <MenuItem v-for="(item, index) in item.Beverages.categories[0].FreshJuices.items"
                              :key="index"
                              :name="item.name"
                              :ingredients="item.ingredients"
                              :price="'Ksh ' + item.price">
                    </MenuItem>
                </div>

                <div class="basis-1/3 pb-4">
                    <div class="text-center">
                        <!-- small title  -->
                        <p class="font-jost text-[#DD5903] uppercase font-semibold"
                           id="p">{{ item.Beverages.name }}</p>
                        <!-- big title  -->
                        <h1 class="text-3xl uppercase font-semibold">
                            {{ item.Beverages.categories[0].HotBeverages.name }}
                        </h1>
                    </div>

                    <MenuItem v-for="(item, index) in item.Beverages.categories[0].HotBeverages.items"
                              :key="index"
                              :name="item.name"
                              :ingredients="item.ingredients"
                              :price="'Ksh ' + item.price">
                    </MenuItem>
                </div>

                <div class="basis-1/3 pb-4">
                    <div class="text-center">
                        <!-- small title  -->
                        <p class="font-jost text-[#DD5903] uppercase font-semibold"
                           id="p">{{ item.Beverages.name }}</p>
                        <!-- big title  -->
                        <h1 class="text-3xl uppercase font-semibold">
                            {{ item.Beverages.categories[0].IcedDrinks.name }}
                        </h1>
                    </div>

                    <MenuItem v-for="(item, index) in item.Beverages.categories[0].IcedDrinks.items"
                              :key="index"
                              :name="item.name"
                              :ingredients="item.ingredients"
                              :price="'Ksh ' + item.price">
                    </MenuItem>
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

<style scoped></style>