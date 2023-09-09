<template>
    <div>
        <!-- loop through menu categories -->
        <MenuCategory v-for="category in [starters, mainDishes, desserts, beverages]"
                      :key="category.id"
                      :name="category.name">
            <!-- loop through menu items and add a dollar sign to price -->
            <MenuItem v-for="item in category.items"
                      :key="item.id"
                      :name="item.name"
                      :ingredients="item.ingredients"
                      :price="'$' + item.price">
            </MenuItem>
        </MenuCategory>

        <!-- menu button  -->
        <div class="flex justify-center">
            <ButtonTwo name="View Full Menu"></ButtonTwo>
        </div>

        <!-- menu image -->
        <div class="pt-8 h-64 pl-6 pr-3"
             data-aos="fade-up"
             data-aos-duration="1000">
            <NuxtImg loading="lazy"
                     format="webp"
                     alt="menu image"
                     provider="cloudinary"
                     src="v1694007232/side-view-fried-meat-with-french-fries-ketchup_141793-4908_fv2qfo.jpg"
                     class="w-full h-full object-cover object-top rounded-md" />
        </div>


    </div>
</template>

<script setup>
const { data } = await useFetch('/api/menu');
const menu = ref(data);
// destructure menu categories from menu 
const { starters, mainDishes, desserts, beverages } = menu.value.menu;
</script>

<style scoped></style>