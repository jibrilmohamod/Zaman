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
            <NuxtImg :loading="lazy"
                     :format="webp"
                     src="https://img.freepik.com/free-photo/side-view-fried-meat-with-french-fries-ketchup_141793-4908.jpg?w=900&t=st=1693829597~exp=1693830197~hmac=91e21abc125eb10ce95968a7a71b17a73805fdca32df2e1e5a97993bc32e1494"
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