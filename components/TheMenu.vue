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


    </div>
</template>

<script setup>
const { data } = await useFetch('/api/menu');
const menu = ref(data);
// destructure menu categories from menu 
const { starters, mainDishes, desserts, beverages } = menu.value.menu;
</script>

<style scoped></style>