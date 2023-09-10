<template>
    <div class="container m-auto h-fit">
        <!-- loop through menu categories -->
        <div class="md:flex">

            <MenuCategory v-for="category in [Milkshakes, Coladas, IcedDrinks]"
                          :key="category.id"
                          :name="category.name"
                          class="basis-1/3">
                <!-- loop through menu items and add a dollar sign to price and  show only 5 items in each category -->
                <MenuItem v-for="item in category.items.slice(0, 3)"
                          :key="item.id"
                          :name="item.name"
                          :ingredients="item.ingredients"
                          :price="'Ksh ' + item.price">
                </MenuItem>
            </MenuCategory>
        </div>


        <!-- menu button  -->
        <div class="flex justify-center">
            <NuxtLink to="/menu">
                <ButtonTwo name="View Full Menu"></ButtonTwo>
            </NuxtLink>
        </div>

        <!-- menu image -->
        <div class="pt-8 h-64 pl-6 pr-3 md:hidden"
             data-aos="fade-up"
             data-aos-duration="1000">
            <NuxtImg loading="lazy"
                     format="webp"
                     alt="menu image"
                     provider="cloudinary"
                     src="v1694007232/side-view-fried-meat-with-french-fries-ketchup_141793-4908_fv2qfo.jpg"
                     class="w-full h-full object-cover object-center rounded-md" />
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