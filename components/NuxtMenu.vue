<template>
    <div class="pt-4 pl-6 pr-3 pb-4">

        <!-- Menu Title  -->
        <div class="h-full text-center">
            <!-- small title  -->
            <p class="font-jost text-[#DD5903] uppercase font-semibold"
               id="p">Our Menu</p>
            <!-- big title  -->
            <h1 class="text-3xl uppercase font-semibold">
                starters
            </h1>
        </div>

        <!-- Menu Items -->
        <div>

            <!-- menu item with price , details and price  -->
            <MenuItem name="Purple Corn Tostada"
                      ingredients="Ricotta, Goat Cheese, Parmesan, Mozzarella, Garlic, Basil, Oregano, Olive Oil"
                      price="$12.99">
            </MenuItem>




        </div>


    </div>
</template>

<script setup>
defineProps(
    [
        'name'
    ]
)

// get menu items from api

const { data } = await useFetch('/api/menu');
const menu = ref(data);
// destructure menu categories from menu 
const { starters, mainDishes, desserts, beverages } = menu.value.menu;

console.log(starters);


</script>

<style scoped>
#p {
    display: inline-block;
    transform: scale(1, .9);
}
</style>